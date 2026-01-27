import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    try {
        await resend.emails.send({
            from: "Masum Portfolio <onboarding@resend.dev>",
            to: ["mdmasumhossain1712@gmail.com"],
            subject: `[Portfolio] ${subject} — ${name}`,
            html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `,
        });
        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ success: false }, { status: 500 });
    }
}
