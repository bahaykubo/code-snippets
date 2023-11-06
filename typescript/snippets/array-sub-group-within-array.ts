const names = ['kang', 'keng', 'king', 'kong', 'kung'];

const subgroupList = (list: string[], numberOfItemsInGroup: number): string[][] => {
  const chunked = [];
  Array.from({ length: Math.ceil(list.length / numberOfItemsInGroup) }, (val, groupIndex) => {
    chunked.push(
      list.slice(groupIndex * numberOfItemsInGroup, groupIndex * numberOfItemsInGroup + numberOfItemsInGroup),
    );
  });
  return chunked;
};

console.log(subgroupList(names, 2));
