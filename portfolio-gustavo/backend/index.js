import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  console.log("CHEGOU NA ROTA");
  console.log(req.body);

  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["gustavoliebfigueira@gmail.com"],
      subject: req.body.subject,
      html: `
        <h3>Nova mensagem</h3>
        <p>Nome: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Mensagem: ${req.body.message}</p>
      `
    });

    console.log("RESEND OK:", result);
    res.json({ success: true });

  } catch (error) {
    console.log("ERRO RESEND:", error);
    res.status(500).json({ success: false });
  }
});
app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});