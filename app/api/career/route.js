import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const resume = formData.get("resume");

    if (!resume) {
      return NextResponse.json(
        { message: "Resume file is required" },
        { status: 400 }
      );
    }

    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // ✅ SMTP via Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify(); // optional but recommended

    // ✅ Gmail-style email HTML
    const emailHtml = `
      <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px; overflow:hidden;">
        <!-- Header -->
        <div style="background:#1a73e8; color:white; padding:20px; text-align:center;">
          <h2 style="margin:0; font-weight:700; font-size:20px;">New Career Application</h2>
        </div>

        <!-- Body -->
        <div style="padding:20px; color:#202124; line-height:1.5;">
          <p style="margin-bottom:10px;">You have received a new career application. Details below:</p>
          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="font-weight:bold; width:120px; padding:8px 0; color:#202124;">Name:</td>
              <td style="padding:8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; width:120px; padding:8px 0; color:#202124;">Email:</td>
              <td style="padding:8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; width:120px; padding:8px 0; vertical-align:top; color:#202124;">Message:</td>
              <td style="padding:8px 0;">${
                message || "No message provided"
              }</td>
            </tr>
          </table>

          <p style="margin-top:20px; font-size:12px; color:#5f6368;">Resume is attached below for review.</p>
        </div>

        <!-- Footer -->
        <div style="background:#f1f3f4; padding:10px; text-align:center; font-size:12px; color:#5f6368;">
          iWiz Solutions - Career Applications
        </div>
      </div>
    `;

    // ✅ Send email with applicant's name in From
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // shows applicant name
      to: process.env.EMAIL_USER, // your mailbox
      replyTo: email, // reply goes to applicant
      subject: "New Career Application",
      html: emailHtml,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({
      message: "Resume sent successfully!",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { message: "Failed to send resume" },
      { status: 500 }
    );
  }
}
