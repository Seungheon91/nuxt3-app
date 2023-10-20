// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://tailwindcss.com/docs/guides/nuxtjs
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: false },
});
