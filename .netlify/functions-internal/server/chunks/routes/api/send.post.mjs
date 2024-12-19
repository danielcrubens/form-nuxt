import { d as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import { Resend } from 'resend';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const resend = new Resend(process.env.RESEND_API_KEY);
const send_post = defineEventHandler(async (event) => {
  const { email, name } = await readBody(event);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Confirma\xE7\xE3o de Cadastro",
      html: `<p>Ol\xE1 ${name},</p><p>Seu cadastro foi realizado com sucesso!</p>`
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

export { send_post as default };
//# sourceMappingURL=send.post.mjs.map
