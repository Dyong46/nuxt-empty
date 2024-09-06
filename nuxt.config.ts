export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app:{
		head:{
			title:"Rentify",
			link:[
				{ rel: "icon", type: "image/png", href:"/favicon.png" }
			],
			meta: [
				{ property: "og:title", content: "Rentify" },
				{ property: "og:description", content: "Description" },
				{ property: "og:image", content: "https://storage.googleapis.com/inservio/image_inservio/455858774_859600249071496_7941323054981346020_n.png" },
				{ property: "og:url", content: "https://rendify.inservio.app/product/Configurations/65e624c6d949b9cd4e97523b" },
				{ property: "og:type", content: "website" }
			]
		}
	},
  ssr: false,
  devtools: { enabled: false },
  css: ["~/assets/variables.scss", "~/assets/scss/index.scss"],
  components: ["~/components"],
	modules: [
		"vuetify-nuxt-module",
		"nuxt3-vuex-module",
		"@nuxtjs/i18n",
	],
	i18n: {
		strategy: "prefix",
		locales: [
			{
				code: "en",
				name: "English"
			},
			{
				code: "fr",
				name: "Français"
			}
		],
		defaultLocale: "en",
		vueI18n: './i18n.config.ts'
	},
  vuetify: {
		moduleOptions: {
			/* module specific options */
		},
		vuetifyOptions: {
			icons: {
				defaultSet: "mdi"
			},
			theme: {
				defaultTheme: "myTheme",
				themes: {
					myTheme: {
						colors: {
							colorBtn: '#123873',
							colorBtnInput: '#BBBBBB',

						}
					}
				}
			},
			
		}
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) => tag === "model-viewer"
		}
	}
})
