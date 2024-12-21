// server/api/send.ts
import { useCompiler } from '#vue-email'
import { Resend } from 'resend'
   
// Inicializa o Resend com a chave API do ambiente
const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  try {
    // Recebe os dados do corpo da requisição
    const { email, name } = await readBody(event)

    // Compila o template Vue com as props necessáriasssd
    const template = await useCompiler('Welcome.vue', {
      props: {
        name,
        email
      }
    })

    // Configura as opções do emaild
    const emailOptions = {
      from: 'Acme <comercial@servenc.com.br>',
      to: [email],
      subject: 'Confirmação de Cadastro',
      html: template.html,
            //html: `<strong>Olá ${name}, seu cadastro foi realizado com sucesso!</strong>`,
    }

    // Envia o email usando o Resend ddscsdc
    const data = await resend.emails.send(emailOptions)

    return {
      success: true,
      data
    }

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    
    return {
      success: false,
      error: error.message
    }
  }
})        