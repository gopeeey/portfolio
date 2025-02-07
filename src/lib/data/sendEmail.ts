import { EmailData } from "@/types";
import axios from "axios";
import validator from "validator";

class CustomError extends Error {}

export async function sendEmail({ name, email, message }: EmailData) {
  try {
    if (!name || !name.length) throw new CustomError("Please enter a name");
    if (!email || !email.length)
      throw new CustomError("Please enter an email address");
    if (!validator.isEmail(email))
      throw new CustomError("Please enter a valid email");
    if (!message || !message.length)
      throw new CustomError("Please enter a message");

    const url = "https://api.mailersend.com/v1/email";
    const Authorization = `Bearer ${process.env.MAILERSEND_API_KEY}`;

    const body = {
      from: {
        email: process.env.MAILERSEND_DOMAIN_EMAIL,
        name,
      },
      to: [
        {
          email: process.env.EMAIL_RECIPIENT,
          name: "Samuel Gopeh",
        },
      ],
      subject: "Message from your portfolio",
      text: `${message}
    
         From: ${name} <${email}>`,
    };

    const res = await axios.post(url, body, {
      headers: { Authorization, "Content-Type": "application/json" },
    });

    if (!res.status.toString().startsWith("2")) {
      console.log("Failed to send email, the res:", res);
      throw new CustomError(`Error sending email`);
    }
  } catch (err) {
    if (err instanceof CustomError) throw err;
    if (err instanceof Error)
      throw new Error("Failed to send message, please try again");
  }
}
