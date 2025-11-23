import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Elegant HTML email template
const createEmailTemplate = (
  email: string,
  subject: string,
  message: string,
) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Contact Message</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            padding: 20px;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #000000 0%, #333333 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            padding: 40px 30px;
            text-align: center;
            border-bottom: 1px solid #e9ecef;
        }

        .header h1 {
            color: #000;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }

        .header p {
            color: #666;
            font-size: 16px;
            font-weight: 400;
        }

        .content {
            padding: 40px 30px;
            background: #ffffff;
        }

        .message-box {
            background: #000;
            color: #fff;
            padding: 30px;
            border-radius: 12px;
            margin: 20px 0;
            border-left: 4px solid #fff;
        }

        .field-group {
            margin-bottom: 25px;
        }

        .field-label {
            font-size: 12px;
            font-weight: 600;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
            display: block;
        }

        .field-value {
            font-size: 16px;
            color: #000;
            font-weight: 500;
            padding: 10px 0;
            border-bottom: 1px solid #e9ecef;
        }

        .message-content {
            font-size: 16px;
            line-height: 1.8;
            color: #fff;
            font-weight: 400;
        }

        .footer {
            background: #000;
            color: #fff;
            padding: 30px;
            text-align: center;
            font-size: 14px;
        }

        .footer p {
            margin-bottom: 10px;
            opacity: 0.8;
        }

        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e9ecef, transparent);
            margin: 30px 0;
        }

        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 12px;
            }

            .header, .content, .footer {
                padding: 25px 20px;
            }

            .header h1 {
                font-size: 24px;
            }

            .message-box {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Portfolio Contact</h1>
            <p>You've received a new message</p>
        </div>

        <div class="content">
            <div class="field-group">
                <span class="field-label">From Email</span>
                <div class="field-value">${email}</div>
            </div>

            <div class="field-group">
                <span class="field-label">Subject</span>
                <div class="field-value">${subject}</div>
            </div>

            <div class="divider"></div>

            <div class="message-box">
                <div class="message-content">
                    ${message.replace(/\n/g, "<br>")}
                </div>
            </div>
        </div>

        <div class="footer">
            <p>This message was sent from your portfolio contact form</p>
            <p>Reply directly to this email to respond to the sender</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message, honeypot } = body;

    // Bot detection
    if (honeypot) {
      return NextResponse.json({ error: "Bot detected." }, { status: 400 });
    }

    // Validation
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Send email with elegant template
    const data = await resend.emails.send({
      from: `Portfolio Contact <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL || "rayydna14@gmail.com",
      subject: `[PORTFOLIO] ${subject}`,
      replyTo: email,
      html: createEmailTemplate(email, subject, message),
      // Fallback plain text
      text: `
Portfolio Contact Form Message

From: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to the sender.
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
