class Say {
  hello() {
    console.log('hello from say!');
  }

  bye() {
    console.log('bye from say!');
  }
}

class Ask {
  where() {
    console.log('where is this?');
  }

  bye() {
    console.log('bye?');
  }
}

module.exports = {
  Say,
  Ask,
};
