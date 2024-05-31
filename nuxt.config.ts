// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	routeRules: {
		"/": { isr: 600 },
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
