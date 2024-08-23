import { current } from "@mongez/react";

export const currentLocaleCode = () => current("localeCode");
export const isRTL = () => current("direction") === "rtl";
export const isLTR = () => current("direction") === "ltr";
export const currentDirection = () => current("direction");

export const getLocalizedValue = (
  localizedValues: { localeCode: string; value: string }[],
) => {
  const localizedValue = Array.isArray(localizedValues)
    ? localizedValues.find(item => item.localeCode === currentLocaleCode())
    : { value: "" };

  return localizedValue ? localizedValue.value : localizedValues[0].value;
};
