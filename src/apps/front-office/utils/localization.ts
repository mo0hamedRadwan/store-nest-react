import { current, LocaleCodes } from "@mongez/react";

export const LingualMode: "array" | "object" = "array";
export function getLocalizedValue(
  localizedValues: { localeCode: string; value: string }[],
) {
  const localizedValue = localizedValues.find(
    item => item.localeCode === current("localeCode"),
  );
  return localizedValue ? localizedValue.value : localizedValues[0].value;
}

export const localeCodesList: LocaleCodes = {
  en: {
    direction: "ltr",
    name: "English",
  },
  ar: {
    direction: "rtl",
    name: "العربية",
  },
};

export type LocaleCode = {
  localeCode: string;
  direction: "ltr" | "rtl";
  name: string;
  flag?: string;
};

export function getLocaleCodes() {
  const localeCodes: LocaleCode[] = [];
  for (const localeCode in localeCodesList) {
    localeCodes.push({
      localeCode,
      ...(localeCodesList[localeCode] as any),
    });
  }

  const currentLocaleCode = current("localeCode");

  // order locale codes by current locale code
  localeCodes.sort((a, b) => {
    if (a.localeCode === currentLocaleCode) return -1;
    if (b.localeCode === currentLocaleCode) return 1;
    return 0;
  });

  return localeCodes;
}
