import dayjs from 'dayjs';

export const logger = (message: string): void => {
  console.log(`${dayjs().toISOString()} - ${message}`);
};
