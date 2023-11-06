module.exports = (list, nameFilter) => {
  return list.filter((x) => x.name === nameFilter).map((x) => ({ name: x.name.toLowerCase(), value: x.value }));
};
