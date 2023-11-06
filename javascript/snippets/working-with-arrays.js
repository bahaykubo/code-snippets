const sortListByDate = (list) => {
  return list
    .sort(function (a, b) {
      const c = new Date(a.date);
      const d = new Date(b.date);
      return d - c;
    })
    .map((valuation) => valuation.date);
};

const sortListByNumber = (list) => {
  return list
    .sort(function (a, b) {
      return a.amount - b.amount;
    })
    .map((valuation) => valuation.amount);
};

const checkArray = (list) => {
  if (list && list.length > 0) {
    console.log(`check array "${list}" -> something in the array`);
  } else {
    console.log(`check array "${list}" -> nothing in the array`);
  }
};
// checkArray(['bing', 'bong']);
// checkArray([]);
// checkArray();

const modifyArray = (list) => {
  const result = [];
  list.forEach((item, index) => {
    result.push({ index: index, name: item });
  });
  return result;
};
// modifyArray(['bing', 'bong']).forEach(item => console.log(`modify array -> ${JSON.stringify(item)}`));

module.exports = {
  sortListByDate,
  sortListByNumber,
  checkArray,
  modifyArray,
};
