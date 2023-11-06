import fs from 'fs';
import { ConsoleColor } from '../config';

// we are going to compare the use of 'promise all' against looping through promises
// to see how much time we can save from using promise all compared to a for loop

// we will create a promise that resolves after 2 seconds and rejects if given name is 'equal'
const promisesPromises = (name: string, file?: string) => {
  return new Promise((resolve, reject) => {
    if (name === 'error') {
      return reject('name is wrong');
    }
    console.time(`time for ${name}`);
    setTimeout(() => {
      fs.mkdirSync('output', { recursive: true });
      fs.appendFileSync(file ?? 'output/youCanRemoveMe.txt', `${Date.now()} - ${name}\n`);
      console.timeEnd(`time for ${name}`);
      return resolve(name);
    }, 2000);
  });
};

// here is a function that does a promise all to await for the promise function to resolve
// given a list of names
const runAll = (names: string[]) => {
  console.time('Promise all');
  Promise.allSettled(names.map(async (name) => await promisesPromises(name, 'output/promiseAll.txt'))).then(
    (response) => {
      console.log('\x1b[32m%s\x1b[0m', `Promise all done -> ${JSON.stringify(response)}`);
      console.timeEnd('Promise all');
    },
  );
};

// here is a function that loops through the list of names and
// awaits for each of the promise to resolve given a list of names
const runForLoop = async (names: string[]) => {
  console.time('Promise for');
  for (const name of names) {
    await promisesPromises(name, './output/promiseForLoop.txt')
      .then((response) => console.log(`Promise for done -> ${response}`))
      .catch((error) => console.log(`Promise for error -> ${error}`));
  }
  console.log(ConsoleColor.Red, 'Promise for done ->');
  console.timeEnd('Promise for');
};

const bNames = ['bang', 'beng', 'bing', 'bong', 'bung', 'error'];
runAll(bNames); // this should complete in just over 2 seconds

const kNames = ['kang', 'keng', 'king', 'kong', 'kung', 'error'];
runForLoop(kNames); // this should complete in just over 10 seconds
