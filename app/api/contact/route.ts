import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Contact form data type
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  packageInterest?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      <p><strong>Subject:</strong> ${data.subject}</p>
      ${data.packageInterest ? `<p><strong>Package Interest:</strong> ${data.packageInterest}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${data.message}</p>
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `;

    // Send email to both addresses
    const recipients = ['admin@plant-rmf.co.za', 'mdlophe@gmail.com'];
    
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'noreply@plant-rmf.co.za',
        to: recipients,
        subject: `Contact Form: ${data.subject}`,
        html: emailHtml,
        replyTo: data.email,
      });

      console.log("Contact form submission sent to:", recipients);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Continue processing even if email fails - you may want to save to database as fallback
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will get back to you soon!",
      data: {
        id: `contact_${Date.now()}`,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
