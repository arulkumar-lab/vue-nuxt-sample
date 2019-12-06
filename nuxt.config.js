export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/both-sides.js" },
    { src: "~/plugins/client.js", mode: "client" },
    { src: "~/plugins/server.js", mode: "server" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [["@nuxtjs/axios", { anotherOption: true }]],
  router: {
    middleware: "stats"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
