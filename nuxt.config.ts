import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      backendUrl: process.env.VITE_BACKEND_URL,
    }
  },
  srcDir: "./src/",
  css: ["~/assets/styles/global.scss"],

  vite: {
    plugins: [
      svgLoader({})
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/vars/_vars.scss" as *;'
        }
      }
    }
  },
  modules: [
    "@nuxt/image",
    '@nuxtjs/i18n'
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      { code: "ru", iso: "ru-RU", file: "ru.json"},
      { code: "en", iso: "en-US", file: "en.json" },
    ],
  },
  image: {
    format: ['avif', 'webp', 'jpg', 'png'],
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  }
})