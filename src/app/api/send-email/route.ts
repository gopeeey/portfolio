import { EmailData } from "@/types";

class ValidationError extends Error {}

export async function POST(req: Request) {
  try {
    if (!req.body) throw new ValidationError("Invalid request body");

    const body = (await req.json()) as EmailData;
    // Sigh
    if (!body.email || !body.email.length)
      throw new ValidationError("Invalid email");
    if (!body.name || !body.name.length)
      throw new ValidationError("Invalid name");
    if (!body.message || !body.message.length)
      throw new ValidationError("Invalid message");

    await sendEmailMailerSend(body);
    console.log("Gets here");
  } catch (err) {
    if (err instanceof ValidationError) {
      return Response.json({ message: err.message }, { status: 400 });
    }
    if (err instanceof Error) {
      console.error(err);
      return Response.json(
        { message: "Sorry an error occurred" },
        { status: 500 }
      );
    }
  }

  return Response.json({ message: "OK" });
}

async function sendEmailMailerSend(data: EmailData) {
  const url = "https://api.mailersend.com/v1/email";
  const auth = `Bearer ${process.env.MAILERSEND_API_KEY}`;

  const body = {
    from: {
      email: process.env.MAILERSEND_DOMAIN_EMAIL,
      name: data.name,
    },
    to: [
      {
        email: process.env.EMAIL_RECIPIENT,
        name: "Samuel Gopeh",
      },
    ],
    subject: "Message from your portfolio",
    text: `${data.message}
    
         From: ${data.name} <${data.email}>`,
  };

  const res = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
    headers: { Authorization: auth, "Content-Type": "application/json" },
  });
  if (!res.ok) {
    console.log("Failed to send email, the res:", res);
    throw new Error(`Error sending email`);
  }
}
