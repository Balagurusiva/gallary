// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	routeRules: {
		"/": { isr: 600 },
	},
    app: {
    head: {
       title:"Relaxaa Gallary",
       link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet' }
    ],
    },
      
  },
	devtools: { enabled: false },
	modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
