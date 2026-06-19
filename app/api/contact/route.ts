import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, businessName, businessType, phone, email, website, plan, message } = body;

  if (!name || !businessName || !phone || !email) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "AgentDeploy Contact <onboarding@resend.dev>",
      to: "officeagentdeploy@gmail.com",
      replyTo: email,
      subject: `New Lead: ${businessName} (${businessType})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #059669; margin-bottom: 4px;">New AgentDeploy Lead</h2>
          <p style="color: #6b7280; margin-top: 0;">Submitted from the website contact form</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Business</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 500;">${businessName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Industry</td>
              <td style="padding: 8px 0; color: #111827;">${businessType || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0; color: #111827;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #111827;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Website</td>
              <td style="padding: 8px 0; color: #111827;">${website || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Plan interest</td>
              <td style="padding: 8px 0; color: #111827;">${plan || "Not specified"}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #111827;">${message}</td>
            </tr>`
                : ""
            }
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">
            Hit reply to respond directly to ${name} at ${email}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
