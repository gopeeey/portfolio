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
  console.log(
    "NODEMAILER_TRANSPORT_SERVICE",
    process.env.NODEMAILER_TRANSPORT_SERVICE,
    process.env.NODEMAILER_SMTP_USER,
    process.env.NODEMAILER_SMTP_PASSWORD
  );
  const isDev = process.env.NODE_ENV === "development";
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: isDev ? false : true,
    port: isDev ? 587 : 465,
    auth: {
      user: process.env.NODEMAILER_SMTP_USER,
      pass: process.env.NODEMAILER_SMTP_PASSWORD,
    },
  });

  console.log("Sending email to", process.env.EMAIL_RECIPIENT);
  await transport.sendMail({
    from: `${data.name} ${data.email}`,
    to: process.env.EMAIL_RECIPIENT,
    subject: "New Message from Your Portfolio",
    text: `${data.message}
    
           From: ${data.name} <${data.email}>`,
  });
  console.log("Email sent successfully");
}
