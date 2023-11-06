const optionalChaining = () => {
  const input = { description: null };
  return input?.description ? true : false;
};

console.log(`optional chaining -> ${optionalChaining()}`);
