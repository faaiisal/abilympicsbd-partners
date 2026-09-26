import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const maxDuration = 30;

const SECRETARIAT_EMAIL = "abilympicsbd@gmail.com";
const FROM_NAME = "Abilympics Bangladesh";
const FROM_ADDRESS = "noreply@epyra.agency";

interface InquiryPayload {
  name: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function extractFields(data: FormData): InquiryPayload {
  return {
    name: String(data.get("name") ?? "").trim(),
    organization: String(data.get("organization") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim(),
    interest: String(data.get("interest") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
  };
}

function validateFields(p: InquiryPayload): string | null {
  if (!p.name) {
    return "Name is required.";
  }

  if (!p.organization) {
    return "Organization is required.";
  }

  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
    return "A valid email address is required.";
  }

  if (!p.interest) {
    return "Please select a partnership interest.";
  }

  if (!p.message) {
    return "Message is required.";
  }

  if (
    p.name.length > 200 ||
    p.organization.length > 200 ||
    p.email.length > 254 ||
    p.phone.length > 50 ||
    p.interest.length > 100 ||
    p.message.length > 5000
  ) {
    return "One or more fields are too long.";
  }

  if (
    [p.name, p.organization, p.email, p.phone, p.interest, p.message].some(
      (value) => value.includes("\r") || value.includes("\n"),
    )
  ) {
    return "Invalid form data.";
  }

  return null;
}

function secretariatHtml(p: InquiryPayload): string {
  const name = escapeHtml(p.name);
  const organization = escapeHtml(p.organization);
  const email = escapeHtml(p.email);
  const phone = p.phone ? escapeHtml(p.phone) : "&mdash;";
  const interest = escapeHtml(p.interest);
  const message = escapeHtml(p.message).replace(/\n/g, "<br />");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Partnership Inquiry</title>
      </head>

      <body style="margin:0;padding:0;background:#f5f7f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
        <div style="width:100%;padding:40px 16px;box-sizing:border-box;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">

            <div style="background:#006a4e;padding:28px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;line-height:1.3;">
                New Partnership Inquiry
              </h1>

              <p style="margin:8px 0 0;color:#d1fae5;font-size:14px;line-height:1.5;">
                Abilympics Bangladesh — Helsinki 2027
              </p>
            </div>

            <div style="padding:32px;">
              <div style="margin-bottom:24px;">
                <p style="margin:0 0 6px;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">
                  Partnership Interest
                </p>

                <p style="margin:0;color:#111827;font-size:18px;font-weight:700;">
                  ${interest}
                </p>
              </div>

              <table
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="border-collapse:collapse;"
              >
                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;width:35%;vertical-align:top;color:#6b7280;font-size:13px;font-weight:700;">
                    Name
                  </td>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;color:#111827;font-size:14px;">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;vertical-align:top;color:#6b7280;font-size:13px;font-weight:700;">
                    Organization
                  </td>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;color:#111827;font-size:14px;">
                    ${organization}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;vertical-align:top;color:#6b7280;font-size:13px;font-weight:700;">
                    Email
                  </td>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;color:#111827;font-size:14px;">
                    <a
                      href="mailto:${email}"
                      style="color:#006a4e;text-decoration:none;"
                    >
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;vertical-align:top;color:#6b7280;font-size:13px;font-weight:700;">
                    Phone / WhatsApp
                  </td>
                  <td style="padding:12px 0;border-top:1px solid #e5e7eb;color:#111827;font-size:14px;">
                    ${phone}
                  </td>
                </tr>
              </table>

              <div style="margin-top:28px;">
                <p style="margin:0 0 10px;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">
                  Message
                </p>

                <div style="padding:18px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;color:#374151;font-size:14px;line-height:1.7;">
                  ${message}
                </div>
              </div>

              <div style="margin-top:24px;padding:16px 20px;background:#ecfdf5;border-left:4px solid #006a4e;border-radius:8px;">
                <p style="margin:0;color:#065f46;font-size:13px;line-height:1.6;">
                  Reply directly to this email to respond to <strong>${name}</strong> at <a href="mailto:${email}" style="color:#006a4e;font-weight:700;text-decoration:none;">${email}</a>.
                </p>
              </div>

              <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e5e7eb;">
                <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.6;">
                  This inquiry was submitted through the Abilympics Bangladesh partnership website.
                </p>
              </div>
            </div>

          </div>
        </div>
      </body>
    </html>
  `;
}

function confirmationHtml(p: InquiryPayload): string {
  const name = escapeHtml(p.name);
  const organization = escapeHtml(p.organization);
  const interest = escapeHtml(p.interest);

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inquiry Received</title>
      </head>

      <body style="margin:0;padding:0;background:#f5f7f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
        <div style="width:100%;padding:40px 16px;box-sizing:border-box;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">

            <div style="background:#006a4e;padding:32px;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;">
                Inquiry Received
              </h1>

              <p style="margin:8px 0 0;color:#d1fae5;font-size:14px;line-height:1.5;">
                Abilympics Bangladesh — Helsinki 2027
              </p>
            </div>

            <div style="padding:32px;">
              <p style="margin:0;color:#111827;font-size:16px;line-height:1.7;">
                Dear ${name},
              </p>

              <p style="margin:18px 0 0;color:#374151;font-size:15px;line-height:1.7;">
                Thank you for your interest in supporting the Bangladesh delegation
                for the International Abilympics Helsinki 2027.
              </p>

              <div style="margin:24px 0;padding:20px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;">
                <p style="margin:0 0 8px;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">
                  Your inquiry
                </p>

                <p style="margin:0;color:#111827;font-size:15px;font-weight:700;">
                  ${interest}
                </p>

                <p style="margin:6px 0 0;color:#6b7280;font-size:13px;">
                  ${organization}
                </p>
              </div>

              <p style="margin:0;color:#374151;font-size:15px;line-height:1.7;">
                Our secretariat has received your inquiry and will review it.
                We aim to respond within <strong>2–3 business days</strong>.
              </p>

              <p style="margin:18px 0 0;color:#374151;font-size:15px;line-height:1.7;">
                Thank you for helping us empower ability, inspire excellence,
                and represent Bangladesh on the international stage.
              </p>

              <div style="margin-top:28px;">
                <a
                  href="https://partners.epyra.agency"
                  style="display:inline-block;padding:12px 20px;background:#006a4e;color:#ffffff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:700;"
                >
                  Visit Partnership Portal
                </a>
              </div>

              <div style="margin-top:32px;padding-top:20px;border-top:1px solid #e5e7eb;">
                <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6;">
                  Abilympics Bangladesh<br />
                  Helsinki 2027 Delegation
                </p>
              </div>
            </div>

          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  let data: FormData;

  try {
    data = await request.formData();
  } catch (error) {
    console.error("[/api/partnership] Failed to parse form data:", error);

    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = extractFields(data);
  const validationError = validateFields(payload);

  if (validationError) {
    return NextResponse.json(
      { error: validationError },
      { status: 422 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error(
      "[/api/partnership] RESEND_API_KEY is not set.",
    );

    return NextResponse.json(
      {
        error:
          "Server misconfiguration. Please contact us directly.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const batchResult = await resend.batch.send([
      {
        from: `${FROM_NAME} <${FROM_ADDRESS}>`,
        to: [SECRETARIAT_EMAIL],
        replyTo: payload.email,
        subject: `[Partnership Inquiry] ${payload.interest} — ${payload.organization}`,
        html: secretariatHtml(payload),
      },
      {
        from: `${FROM_NAME} <${FROM_ADDRESS}>`,
        to: [payload.email],
        subject:
          "We received your inquiry — Abilympics Bangladesh Helsinki 2027",
        html: confirmationHtml(payload),
      },
    ]);

    if (batchResult.error) {
      console.error(
        "[/api/partnership] Resend batch error:",
        batchResult.error,
      );

      return NextResponse.json(
        { error: "Failed to send inquiry. Please try again." },
        { status: 502 },
      );
    }

    console.info("[/api/partnership] Emails sent via batch:", batchResult.data);

    return NextResponse.json(
      { success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error(
      "[/api/partnership] Unexpected error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "An unexpected error occurred. Please try again.",
      },
      { status: 500 },
    );
  }
}