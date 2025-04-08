export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  ui: {
    fonts: true,
    colorMode: true,
    theme: {
      colors: ['error'],
    },
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
      },
      {
        name: 'DM Sans',
        provider: 'google',
      },
    ],
  },
})
