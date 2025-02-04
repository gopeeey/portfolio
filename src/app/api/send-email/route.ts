import { EmailData } from "@/types";
import nodemailer from "nodemailer";

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

    await sendEmail(body);
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

async function sendEmail(data: EmailData) {
  const transport = nodemailer.createTransport({
    service: process.env.NODEMAILER_TRANSPORT_SERVICE,
    auth: {
      user: process.env.NODEMAILER_SMTP_USER,
      pass: process.env.NODEMAILER_SMTP_PASSWORD,
    },
  });

  await transport.sendMail({
    from: `${data.name} ${data.email}`,
    to: process.env.EMAIL_RECIPIENT,
    subject: "New Message from Your Portfolio",
    text: `${data.message}
    
           From: ${data.name} <${data.email}>`,
  });
}
