import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const values = await req.json();
  const { email, subject, message } = values;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: '"sender@gmail.com" <sender@gmail.com>',
      to: "rayydna14@gmail.com",
      subject: subject,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .email-container {
              border-radius: 8px;
              overflow: hidden;
              border: 1px solid #e0e0e0;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
            }
            .email-header {
              background-color: #4b6cb7;
              background-image: linear-gradient(to right, #4b6cb7, #182848);
              color: white;
              padding: 20px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
              background-color: #fff;
            }
            .section {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #f0f0f0;
            }
            .section-title {
              font-size: 18px;
              font-weight: 600;
              color: #4b6cb7;
              margin-bottom: 10px;
            }
            .info-item {
              padding: 8px 0;
            }
            .label {
              font-weight: 600;
              color: #555;
              margin-right: 8px;
            }
            .message-content {
              background-color: #f9f9f9;
              border-left: 4px solid #4b6cb7;
              padding: 15px;
              border-radius: 0 4px 4px 0;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #888;
              padding: 15px;
              background-color: #f7f7f7;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1 style="margin: 0;">New Message</h1>
              <p style="margin: 5px 0 0 0;">From contact form</p>
            </div>
            <div class="email-body">
              <div class="section">
                <div class="section-title">Contact Details</div>
                <div class="info-item">
                  <span class="label">Email:</span> ${email}
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Message</div>
                <div class="message-content">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
            </div>
            <div class="footer">
              This email was sent from your website's contact form
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Form sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error, try it again." },
      { status: 500 }
    );
  }
}
