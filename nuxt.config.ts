import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    "@nuxtjs/tailwindcss",
    '@primevue/nuxt-module'
   
  ],
  primevue: {
        options: {
            theme: {
            preset: Aura,
              darkModeSelector: '.my-app-dark',
            },
            ripple: true,
        },
        autoImport: true,
  },
  css: ['primeicons/primeicons.css']
  
})