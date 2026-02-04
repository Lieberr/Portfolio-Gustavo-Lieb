import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["gustavoliebfigueira@gmail.com"],
      subject,
      html: `
        <h3>Nova mensagem</h3>
        <p>Nome: ${name}</p>
        <p>Email: ${email}</p>
        <p>Mensagem: ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}