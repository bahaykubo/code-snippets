const list = ['a', 'b', 'c'];
const listEntries = list.entries();

for (const listEntry of listEntries) {
  console.log(listEntry);
  console.log(listEntry[0]);
}
