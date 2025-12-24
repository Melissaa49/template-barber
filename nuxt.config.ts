export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: 'Barbershop',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Barber shop – Coupe, barbe et rituel.' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap'
        }
      ]
    }
  },

  css: [
    '~/assets/styles/global.css'
  ],

  typescript: {
    strict: true
  }
})
