import en from "./locales/en";
import fr from "./locales/fr";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
	fallbackLocale: "en",
  messages: {
		en: {
			...en
		},
		fr: {
			...fr
		}
	}
}))
