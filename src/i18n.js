import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
	debug: true,
	fallbackLng: 'en',
	resources: {
		en: {
			translation: {
				mainTitle: 'Hi how are you?',
			},
		},

		ru: {
			translation: {
				mainTitle: 'Привет как дела',
			},
		},

		ko: {
			translation: {
				mainTitle: '좋은 아침입니다.',
			},
		},
	},
})

export default i18n;