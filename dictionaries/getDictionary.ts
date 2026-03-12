export const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
  ar: () => import('./ar.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    return dictionaries.fr(); // fallback to fr
  }
  return dictionaries[locale]();
}
