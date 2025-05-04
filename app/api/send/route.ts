import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // These would normally be in environment variables
        user: "admin@plant-rmf.co.za", // replace with your actual email
        pass: process.env.EMAIL_PASSWORD || "your-app-password", // use environment variable in production
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "admin@plant-rmf.co.za", // The address to send emails to
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New message from the contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
