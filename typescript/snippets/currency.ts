import currency from 'currency.js';

const getAmountWithNoCurrencySymbol = (value: number): string => {
  return currency(value).format({ symbol: '' });
};

const getAmountWithCurrencySymbol = (value: number): string => {
  return currency(value).format({ symbol: '$' });
};

console.log(getAmountWithNoCurrencySymbol(-100)); // -100.00
console.log(getAmountWithCurrencySymbol(-100)); // -$100.00
