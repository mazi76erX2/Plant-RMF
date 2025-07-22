import { NextRequest, NextResponse } from "next/server";

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-reply to user

    console.log("Contact form submission:", data);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
