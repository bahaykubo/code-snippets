type NamedValue = { name: string; value: string };

const filterList = (list: NamedValue[], nameFilter: string): NamedValue[] => {
  return list.filter((x) => x.name === nameFilter).map((x) => ({ name: x.name.toLowerCase(), value: x.value }));
};

export { filterList };
