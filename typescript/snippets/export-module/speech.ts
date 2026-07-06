class Say {
  hello(): void {
    console.log('hello from say!');
  }

  bye(): void {
    console.log('bye from say!');
  }
}

class Ask {
  where(): void {
    console.log('where is this?');
  }

  bye(): void {
    console.log('bye?');
  }
}

export { Say, Ask };
