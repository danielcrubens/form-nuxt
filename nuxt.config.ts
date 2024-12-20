// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["nuxt-vuefire", '@vue-email/nuxt','@nuxtjs/tailwindcss',  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
     // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
 
 ssr: true,

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY
  },
  vueEmail: {
    baseUrl: 'https://formnuxt.netlify.app/', // Ajuste para sua URL
    templateDir: 'emails', // Diretório onde estão seus templates
  },
  
  nitro: {
    publicAssets: [
      { 
        dir: 'emails',
        baseURL: '/emails',
        maxAge: 60 * 60 * 24 * 365 // cache for 1 year
      }
    ]
  }
  
})
