import fs from 'fs';

type UserRecord = { name: string; job: string; age: number };
type UsersFile = { users: UserRecord[]; jobs?: { job: string; pay: number } };

const path = './tmp';
const filename = 'output.json';

if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true });
}

// create new file
console.log('NEW FILE');
const users: UsersFile = {
  users: [],
};
fs.writeFileSync(`${path}/${filename}`, JSON.stringify(users));
console.log(JSON.parse(fs.readFileSync(`${path}/${filename}`, 'utf-8')));

// first append
console.log('FIRST APPEND');
const config: UsersFile = JSON.parse(fs.readFileSync(`${path}/${filename}`, 'utf-8'));
config.users.push({
  name: 'bing',
  job: 'doctor',
  age: 37,
});
fs.writeFileSync(`${path}/${filename}`, JSON.stringify(config));
console.log(JSON.parse(fs.readFileSync(`${path}/${filename}`, 'utf-8')));

// second append
console.log('SECOND');
const config2: UsersFile = JSON.parse(fs.readFileSync(`${path}/${filename}`, 'utf-8'));
config2.users.push({
  name: 'bong',
  job: 'guard',
  age: 22,
});
config2.jobs = { job: 'doctor', pay: 30000 };
fs.writeFileSync(`${path}/${filename}`, JSON.stringify(config2));
console.log(JSON.parse(fs.readFileSync(`${path}/${filename}`, 'utf-8')));

const jobs: UsersFile = JSON.parse(fs.readFileSync(`${path}/${filename}`, 'utf-8'));

console.log(jobs.jobs);
console.log(jobs.users.find((user) => user.job === 'doctor'));
