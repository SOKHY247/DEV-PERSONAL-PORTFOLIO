import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import km from './locales/km.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    km: { translation: km },
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  if (lng === 'km') {
    document.documentElement.classList.add('lang-km')
  } else {
    document.documentElement.classList.remove('lang-km')
  }
})

// apply on initial load
const initialLang = localStorage.getItem('lang') || 'en'
document.documentElement.lang = initialLang
if (initialLang === 'km') document.documentElement.classList.add('lang-km')

export default i18n
