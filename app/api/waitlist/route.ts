import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    await resend.emails.send({
      from: "Atlantis <onboarding@resend.dev>",
      to: "jsecordwright@gmail.com",
      subject: "New Atlantis Waitlist Signup",
      html: `<p>New signup: <strong>${email}</strong></p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
