export type User = {
  _id: string;
  name: string;
};

export type Message = NewMessage & {
  _id: string;
  userId: string;
};

export type NewMessage = {
  username: string;
  subject: string;
  message: string;
};
