import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/partnership
 *
 * Receives the partnership inquiry form submission and sends two emails via Resend:
 *   1. A notification to the partnership inbox.
 *   2. An auto-reply confirmation to the applicant.
 *
 * Accepts: application/x-www-form-urlencoded  (FormData from the client)
 * Returns: 200 { success: true }  |  4xx/5xx { error: string }
 */

const resend = new Resend(process.env.RESEND_API_KEY);

const SECRETARIAT_EMAIL = "abilympicsbd@gmail.com";
const FROM_NAME = "Abilympics Bangladesh";
const FROM_ADDRESS = "noreply@epyra.agency"; // verified sender domain in Resend

// ── Field types ──────────────────────────────────────────────────────────────

interface InquiryPayload {
  name: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Escapes the five HTML-special characters so user-supplied values
 * cannot inject markup or scripts into the email body.
 */
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
  if (!p.name) return "Name is required.";
  if (!p.organization) return "Organization is required.";
  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))
    return "A valid email address is required.";
  if (!p.interest) return "Please select a partnership interest.";
  if (!p.message) return "Message is required.";
  return null;
}

/** HTML email body for the secretariat notification */
function secretariatHtml(p: InquiryPayload): string {
  // Escape all user-supplied values before inserting into HTML
  const name         = escapeHtml(p.name);
  const organization = escapeHtml(p.organization);
  const email        = escapeHtml(p.email);
  const phone        = p.phone ? escapeHtml(p.phone) : "&mdash;";
  const interest     = escapeHtml(p.interest);
  const message      = escapeHtml(p.message);

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;font-family:ui-sans-serif,system-ui,sans-serif;background:#f8fafc;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
    <tr>
      <td style="background:#006A4E;padding:24px 32px;">
        <p style="margin:0;font-size:12px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:#a7f3d0;">Abilympics Bangladesh · Helsinki 2027</p>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;">New Partnership Inquiry</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:32px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;">Name</strong><br/><span style="font-size:15px;">${name}</span></td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;">Organization</strong><br/><span style="font-size:15px;">${organization}</span></td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;">Email</strong><br/><a href="mailto:${email}" style="font-size:15px;color:#006A4E;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;">Phone / WhatsApp</strong><br/><span style="font-size:15px;">${phone}</span></td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;">Partnership Interest</strong><br/><span style="font-size:15px;font-weight:700;color:#006A4E;">${interest}</span></td></tr>
          <tr>
            <td style="padding:8px 0;">
              <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#64748b;">Message</strong>
              <p style="margin:8px 0 0;font-size:15px;line-height:1.6;white-space:pre-wrap;">${message}</p>
            </td>
          </tr>
        </table>
        <div style="margin-top:32px;padding:16px;background:#f0fdf4;border-radius:8px;border-left:4px solid #006A4E;">
          <p style="margin:0;font-size:13px;color:#15803d;">
            Reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px;background:#f8fafc;font-size:11px;color:#94a3b8;text-align:center;">
        Abilympics Bangladesh Secretariat · partners.epyra.agency · Helsinki 2027
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** HTML auto-reply for the applicant */
function confirmationHtml(p: InquiryPayload): string {
  // Escape all user-supplied values before inserting into HTML
  const name         = escapeHtml(p.name);
  const organization = escapeHtml(p.organization);
  const interest     = escapeHtml(p.interest);

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;font-family:ui-sans-serif,system-ui,sans-serif;background:#f8fafc;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
    <tr>
      <td style="background:#006A4E;padding:24px 32px;">
        <p style="margin:0;font-size:12px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:#a7f3d0;">Abilympics Bangladesh · Helsinki 2027</p>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;">Thank you, ${name}!</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:32px;">
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;">
          We have received your <strong>${interest}</strong> inquiry on behalf of <strong>${organization}</strong>.
          Our secretariat will review your message and respond within <strong>2&#x2013;3 business days</strong>.
        </p>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;">
          In the meantime, feel free to explore our partnership prospectus at
          <a href="https://partners.epyra.agency" style="color:#006A4E;font-weight:600;">partners.epyra.agency</a>.
        </p>
        <div style="margin-top:24px;padding:20px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;">
          <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#15803d;">Your inquiry summary</p>
          <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Interest:</strong> ${interest}</p>
          <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Organization:</strong> ${organization}</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px;">
        <p style="margin:0;font-size:13px;color:#64748b;line-height:1.6;">
          If you have urgent questions, write directly to
          <a href="mailto:abilympicsbd@gmail.com" style="color:#006A4E;">abilympicsbd@gmail.com</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px;background:#f8fafc;font-size:11px;color:#94a3b8;text-align:center;">
        Abilympics Bangladesh &middot; Empowering Ability. Inspiring Excellence. Representing Bangladesh.
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Route Handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // 1. Parse body
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // 2. Extract & validate
  const payload = extractFields(data);
  const validationError = validateFields(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  // 3. Guard: API key must be present
  if (!process.env.RESEND_API_KEY) {
    console.error("[/api/partnership] RESEND_API_KEY is not set.");
    return NextResponse.json({ error: "Server misconfiguration. Please contact us directly." }, { status: 500 });
  }

  // 4. Send both emails concurrently
  try {
    const [notifyResult, confirmResult] = await Promise.all([
      // Notification → inbox
      resend.emails.send({
        from: `${FROM_NAME} <${FROM_ADDRESS}>`,
        to: [SECRETARIAT_EMAIL],
        replyTo: payload.email,
        subject: `[Partnership Inquiry] ${payload.interest} — ${payload.organization}`,
        html: secretariatHtml(payload),
      }),
      // Auto-reply → applicant
      resend.emails.send({
        from: `${FROM_NAME} <${FROM_ADDRESS}>`,
        to: [payload.email],
        subject: `We received your inquiry — Abilympics Bangladesh Helsinki 2027`,
        html: confirmationHtml(payload),
      }),
    ]);

    // Check for Resend-level errors on BOTH sends before reporting success
    if (notifyResult.error) {
      console.error("[/api/partnership] Resend notification error:", notifyResult.error);
      return NextResponse.json({ error: "Failed to send inquiry. Please try again." }, { status: 502 });
    }
    if (confirmResult.error) {
      console.error("[/api/partnership] Resend confirmation error:", confirmResult.error);
      return NextResponse.json({ error: "Failed to send inquiry. Please try again." }, { status: 502 });
    }

    console.info("[/api/partnership] Emails sent:", {
      notify: notifyResult.data?.id,
      confirm: confirmResult.data?.id,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/partnership] Unexpected error:", err);
    return NextResponse.json({ error: "An unexpected error occurred. Please try again." }, { status: 500 });
  }
}
