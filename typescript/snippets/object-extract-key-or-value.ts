const me = {
  name: 'bing',
  address: 'bong',
  phone: 'bang',
};

const keys = [];
Object.keys(me).map((key) => keys.push(key));
console.log('Object keys ->');
console.log(keys);

const values = [];
Object.values(me).map((value) => values.push(value));
console.log('Object values ->');
console.log(values);

const keyString = Object.keys(me)
  .map((key) => key)
  .join(',');
console.log('Object keys string ->');
console.log(keyString);

const keyValue = [];
Object.entries(me).map((entry) => keyValue.push({ [entry[0]]: entry[1] }));
console.log('Object key value property array ->');
console.log(keyValue);
