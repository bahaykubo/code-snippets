/**
 * @typedef Basket
 * @type {object}
 * @property {BasketItem[]} [basketItems]
 * @property {CurrencyAmount[]} [totals]
 */

/**
 * @typedef BasketItem
 * @type {object}
 * @property {ProductDetails} productDetails
 * @property {number} quantity
 * @property {CurrencyAmount[]} currencyAmounts
 */

/**
 * @typedef ProductDetails
 * @type {object}
 * @property {string} code
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef CurrencyAmount
 * @type {object}
 * @property {string} currencyCode
 * @property {string} [qualifier]
 * @property {string} amount
 * @property {string} paymentBy
 * @property {EquivalentCurrency} [equivalentCurrency]
 */

/**
 * @typedef EquivalentCurrency
 * @type {object}
 * @property {string} currencyCode
 * @property {string} [qualifier]
 * @property {string} [amount]
 */

/**
 * @param {Basket} basket
 */
const createBasket = (basket) => {
  const { basketItems, totals } = basket;
  const items = [];
  basketItems?.forEach((basketItem) => {
    const { productDetails, quantity, currencyAmounts } = basketItem;
    items.push({
      quantity,
      product_id: null,
      product_code: null,
      product_data: productDetails ? productDetails : null,
      currency_amounts: createCurrencyAmounts(currencyAmounts),
    });
  });
  return {
    items: items.length > 0 ? items : null,
    totals: createCurrencyAmounts(totals),
  };
};

/**
 * @param {CurrencyAmount[]} currencyAmounts
 */
const createCurrencyAmounts = (currencyAmounts) => {
  const amounts = [];
  currencyAmounts?.forEach((currencyAmount) => {
    const { currencyCode, qualifier, amount, paymentBy, equivalentCurrency } = currencyAmount;
    amounts.push({
      currency_code: currencyCode,
      qualifier: qualifier ? qualifier : null,
      amount,
      analytics: {
        payment: { main: { by: paymentBy } },
        equivalents: equivalentCurrency ? [equivalentCurrency] : null,
      },
    });
  });
  return amounts.length > 0 ? amounts : null;
};

const basket = createBasket({
  basketItems: [
    {
      productDetails: {
        code: 'PIA10YR',
      },
      quantity: 1,
      currencyAmounts: [
        {
          currencyCode: 'X-FBPTS',
          qualifier: 'std',
          amount: '10.0',
          paymentBy: 'loyalty',
        },
        {
          currencyCode: 'NZD',
          qualifier: 'std',
          amount: '100.0',
          paymentBy: 'credit_card',
        },
      ],
    },
    {
      productDetails: {
        code: 'PIA10YR',
      },
      quantity: 1,
      currencyAmounts: [
        {
          currencyCode: 'NZD',
          amount: '10.0',
          paymentBy: 'credit_card',
          equivalentCurrency: {
            currencyCode: 'X-FBPTS',
            qualifier: 'std',
            amount: '1.0',
          },
        },
      ],
    },
  ],
  totals: [
    {
      currencyCode: 'X-FBPTS',
      qualifier: 'std',
      amount: '10.0',
      paymentBy: 'loyalty',
    },
    {
      currencyCode: 'NZD',
      qualifier: 'std',
      amount: '100.0',
      paymentBy: 'credit_card',
    },
    {
      currencyCode: 'NZD',
      amount: '10.0',
      paymentBy: 'credit_card',
      equivalentCurrency: {
        currencyCode: 'X-FBPTS',
        qualifier: 'std',
        amount: '1.0',
      },
    },
  ],
});

console.log(JSON.stringify(basket, null, 2));
console.log(basket.items.length);
console.log(JSON.stringify(createBasket({ basketItems: null }), null, 2));
