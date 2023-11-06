const nameNewPromise = (name) => {
  return new Promise((resolve, reject) => {
    if (!name || name === 'error') {
      setTimeout(() => reject('error'), 500);
    } else {
      setTimeout(() => resolve(`hello ${name}`), 500);
    }
  });
};

const namePromise = (name) => {
  if (!name || name === 'error') {
    return 'error';
  } else {
    return `hello ${name}`;
  }
};

const promise1 = () => {
  let index = 0;
  return new Promise((resolve) => {
    setTimeout(() => resolve(`var 1 ${++index} should be "2"`), 500);
  });
};

const promise2 = () => {
  let index = 0;
  return new Promise((resolve) => {
    setTimeout(() => resolve(`var 2 ${++index} should be "2"`), 1000);
  });
};

module.exports = {
  nameNewPromise,
  namePromise,
  promise1,
  promise2,
};
