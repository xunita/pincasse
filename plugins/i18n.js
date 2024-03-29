export default function ({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    // eslint-disable-next-line no-console
    // console.log(oldLocale, newLocale)
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    // eslint-disable-next-line no-console
    // console.log(oldLocale, newLocale)
    setTimeout(() => {
      location.reload()
    }, 10)
  }
}
