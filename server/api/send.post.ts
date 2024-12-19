// server/api/send.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const { email, name } = await readBody(event);

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirmação de Cadastro',
      html: `<p>Olá ${name},</p><p>Seu cadastro foi realizado com sucesso!</p>`,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});