// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["nuxt-vuefire", '@vue-email/nuxt'],
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
  /* nitro: {
    preset: 'node-server'  // ou outro preset adequado ao seu caso
  }, */
  /* ssr: true, */
/*   routeRules: {
    '/api/**': { ssr: true }
  }, */
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY
  }
})
