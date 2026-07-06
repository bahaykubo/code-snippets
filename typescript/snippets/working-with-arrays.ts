type Valuation = { date: string; amount: number };

const sortListByDate = (list: Valuation[]): string[] => {
  return list
    .sort(function (a, b) {
      const c = new Date(a.date);
      const d = new Date(b.date);
      return d.getTime() - c.getTime();
    })
    .map((valuation) => valuation.date);
};

const sortListByNumber = (list: Valuation[]): number[] => {
  return list
    .sort(function (a, b) {
      return a.amount - b.amount;
    })
    .map((valuation) => valuation.amount);
};

const checkArray = (list?: unknown[]): void => {
  if (list && list.length > 0) {
    console.log(`check array "${list}" -> something in the array`);
  } else {
    console.log(`check array "${list}" -> nothing in the array`);
  }
};
checkArray(['bing', 'bong']);
checkArray([]);
checkArray();

const modifyArray = (list: string[]): { index: number; name: string }[] => {
  const result: { index: number; name: string }[] = [];
  list.forEach((item, index) => {
    result.push({ index: index, name: item });
  });
  return result;
};
modifyArray(['bing', 'bong']).forEach((item) => console.log(`modify array -> ${JSON.stringify(item)}`));

export { sortListByDate, sortListByNumber, checkArray, modifyArray };
