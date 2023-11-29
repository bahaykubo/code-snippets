// eslint-disable-next-line @typescript-eslint/naming-convention
import Nedb from '@seald-io/nedb';

const users = [
  {
    name: 'jim',
  },
  {
    name: 'bob',
  },
];

const messages = [
  {
    subject: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    message:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    subject: 'qui est esse',
    message:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    subject: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    message:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];

const usersDB = new Nedb({ filename: 'data/users.db', autoload: true });
const messagesDB = new Nedb({ filename: 'data/messages.db', autoload: true });

const seedData = async () => {
  users.forEach((user) => usersDB.insert(user));
  const userId = await getUserIdByName('jim', usersDB);

  messages.forEach((post) => {
    messagesDB.insert({ userId, username: 'jim', ...post });
  });
};

const getUserIdByName = async (name: string, usersDB: Nedb): Promise<string> => {
  const user: any = await new Promise((resolve, reject) => {
    usersDB.findOne({ name }, (error, user: any) => {
      if (error) {
        reject(error);
      }
      resolve(user);
    });
  });
  return user._id;
};

seedData();
