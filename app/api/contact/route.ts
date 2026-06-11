import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, date, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "westraygrace@gmail.com",
      subject: `New Photography Enquiry from ${name}`,
      html: `
        <h2>New Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}