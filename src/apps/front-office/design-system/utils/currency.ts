export function toCurrency(value: number, currency: string = "$") {
  return `${currency}${value.toFixed(2)}`;
}
