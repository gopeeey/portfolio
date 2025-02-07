import { EmailData } from "@/types";
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

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    const body = (await res.json()) as { message: string };
    if (!res.ok) throw new CustomError(body.message);
  } catch (err) {
    if (err instanceof CustomError) throw err;
    if (err instanceof Error)
      throw new Error("Failed to send message, please try again");
  }
}
