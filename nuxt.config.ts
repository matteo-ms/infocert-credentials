// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  app: {
    baseURL: "/vc-repository/"
  }
})
