export const hello = (): Hello => {
  return { shout: 'hello!' };
};

interface Hello {
  shout: string;
}
