const optionalChaining = (): boolean => {
  const input: { description: string | null } = { description: null };
  return input?.description ? true : false;
};

console.log(`optional chaining -> ${optionalChaining()}`);
