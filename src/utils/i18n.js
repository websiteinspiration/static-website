import i18next from 'i18next'

// Translations
import shared from '../shared/translations.json'
import nav from '../shared/Nav/translations.json'
import footer from '../shared/Footer/translations.json'
import talent from '../App/talent/translations.json'

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: 'en',
  // Using simple hardcoded resources for simple example
  resources: {
    en: {
      shared: shared.en,
      nav: nav.en,
      footer: footer.en,

      // Pages
      talent: talent.en,
    },
    de: {
      shared: shared.de,
      nav: nav.de,
      footer: footer.de,

      // Pages
      talent: talent.de,
    },
    nl: {
      shared: shared.nl,
      nav: nav.nl,
      footer: footer.nl,

      // Pages
      talent: talent.nl,
    },
  },
})

export default i18next
