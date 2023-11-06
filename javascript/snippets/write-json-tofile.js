const fs = require('fs');

const path = './tmp';
const filename = 'output.json';

if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true });
}

// create new file
console.log('NEW FILE');
const users = {
  users: [],
};
fs.writeFileSync(`${path}/${filename}`, JSON.stringify(users));
console.log(JSON.parse(fs.readFileSync(`${path}/${filename}`)));

// first append
console.log('FIRST APPEND');
const config = JSON.parse(fs.readFileSync(`${path}/${filename}`));
config.users.push({
  name: 'bing',
  job: 'doctor',
  age: 37,
});
fs.writeFileSync(`${path}/${filename}`, JSON.stringify(config));
console.log(JSON.parse(fs.readFileSync(`${path}/${filename}`)));

// second append
console.log('SECOND');
const config2 = JSON.parse(fs.readFileSync(`${path}/${filename}`));
config2.users.push({
  name: 'bong',
  job: 'guard',
  age: 22,
});
config2.jobs = { job: 'doctor', pay: 30000 };
fs.writeFileSync(`${path}/${filename}`, JSON.stringify(config2));
console.log(JSON.parse(fs.readFileSync(`${path}/${filename}`)));

const jobs = JSON.parse(fs.readFileSync(`${path}/${filename}`));

console.log(jobs.jobs);
console.log(jobs.users.find((user) => user.job === 'doctor'));
