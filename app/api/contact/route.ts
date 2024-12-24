import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transport = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 465, // Correct secure port for SMTP
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, subject, text } = body;

    // Validate request payload
    if (!email || !subject || !text) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify SMTP connection
    await transport.verify();

    // Send email to site admin
    const adminMailInfo = await transport.sendMail({
      from: email,
      to: SITE_MAIL_RECIEVER,
      subject,
      text,
    });

    // console.log("Admin email sent:", adminMailInfo.messageId);

    // Send confirmation email to user
    const userMailInfo = await transport.sendMail({
      from: SITE_MAIL_RECIEVER, // Use the site admin's email as the sender
      to: email, // The user's email
      subject: "Thank you for reaching out!",
      text: `Hello,

Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.

Here's a summary of your message:
------------------------------
${text}
------------------------------

Best regards,  
[Your Company Name or Contact Team]`,
    });

    // console.log("User confirmation email sent:", userMailInfo.messageId);

    return NextResponse.json(
      {
        message: "Messages sent successfully",
        adminMessageId: adminMailInfo.messageId,
        userMessageId: userMailInfo.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Error sending email:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
