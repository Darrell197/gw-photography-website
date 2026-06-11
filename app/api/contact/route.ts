import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("API CALLED");

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, date, message } = await req.json();

    const result = await resend.emails.send({
      from: "Grace Westray <hello@gracewphotography.com>",
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

    console.log("RESEND RESPONSE:", result);

    return Response.json(result);
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return Response.json(
      {
        error: String(error),
      },
      { status: 500 }
    );
  }
}