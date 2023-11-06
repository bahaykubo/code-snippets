const randomString = (numberChars) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let value = '';
  while (value.length < numberChars) {
    value += chars[Math.floor(Math.random() * chars.length)];
  }
  return value;
};

console.log(`random string -> ${randomString(6)}`);
