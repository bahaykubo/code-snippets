type Basket = {
  basketItems?: BasketItem[];
  totals?: CurrencyAmount[];
};

type BasketItem = {
  productDetails: ProductDetails;
  quantity: number;
  currencyAmounts: CurrencyAmount[];
};

type ProductDetails = {
  code: string;
  name?: string;
  description?: string;
};

type CurrencyAmount = {
  currencyCode: string;
  qualifier?: string;
  amount: string;
  paymentBy: string;
  equivalentCurrency?: EquivalentCurrency;
};

type EquivalentCurrency = {
  currencyCode: string;
  qualifier?: string;
  amount?: string;
};

type BasketItemRecord = {
  quantity: number;
  product_id: null;
  product_code: null;
  product_data: ProductDetails | null;
  currency_amounts: CurrencyAmountRecord[] | null;
};

type CurrencyAmountRecord = {
  currency_code: string;
  qualifier: string | null;
  amount: string;
  analytics: {
    payment: { main: { by: string } };
    equivalents: EquivalentCurrency[] | null;
  };
};

const createBasket = (basket: Basket): { items: BasketItemRecord[] | null; totals: CurrencyAmountRecord[] | null } => {
  const { basketItems, totals } = basket;
  const items: BasketItemRecord[] = [];
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

const createCurrencyAmounts = (currencyAmounts?: CurrencyAmount[]): CurrencyAmountRecord[] | null => {
  const amounts: CurrencyAmountRecord[] = [];
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
console.log(basket.items?.length);
console.log(JSON.stringify(createBasket({ basketItems: undefined }), null, 2));
