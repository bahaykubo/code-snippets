import express from 'express';
// eslint-disable-next-line @typescript-eslint/naming-convention
import Nedb from '@seald-io/nedb';
import { Message, NewMessage, User } from '../types/message';
import { logger, stringifyJSON } from '../utilities';

export const messagesRouter = express.Router();

const messagesDB = new Nedb({ filename: 'data/messages.db', autoload: true });
const usersDB = new Nedb({ filename: 'data/users.db', autoload: true });

messagesRouter.get('/', (req, res) => {
  logger('get messages');
  messagesDB.find({}, (error: Error, data: Message[]) => {
    if (error) {
      res.status(400).send({ errors: [`Failed to get messages. ${error.name}`] });
      return;
    }
    res.json({ data });
  });
});

messagesRouter.get('/:userName', async (req, res) => {
  const userName = req.params.userName;
  logger(`get messages for ${userName}`);
  const user = await getUserDetails(userName, usersDB);
  if (user) {
    const posts = await getMessagesByUserId(user._id, messagesDB);
    res.json({ data: posts });
  } else {
    const error = { Errors: [`No blog posts by ${userName}`] };
    logger(`get posts for error - ${stringifyJSON(error)}`);
    res.status(404).send(error);
  }
});

messagesRouter.post('/', async (req, res) => {
  const message: NewMessage = req.body;
  logger(`post message - ${stringifyJSON(message)}`);

  const errors: string[] = [];
  if (!message?.username) {
    errors.push('userId is required but not provided');
  }
  if (!message?.subject) {
    errors.push('subject is required but not provided');
  }
  if (!message?.message) {
    errors.push('message is required but not provided');
  }

  const user = await getUserDetails(message.username, usersDB);
  if (!user) {
    errors.push(`user '${message.username}' does not exist`);
  }

  if (errors.length > 0) {
    const errorResponse = { errors };
    logger(`post message error - ${stringifyJSON(errorResponse)}`);
    res.status(400).send(errorResponse);
    return;
  }

  await messagesDB.insertAsync({ userId: user._id, ...message }).then(() => {
    res.status(201).send();
  });
});

export const getMessagesByUserId = async (userId: string, messagesDB: Nedb): Promise<Message[]> => {
  return await messagesDB.findAsync({ userId });
};

export const getUserDetails = async (userName: string, usersDB: Nedb): Promise<User> => {
  return await usersDB.findOneAsync({ name: userName });
};
