describe('Compare Test', () => {
  it('compare two objects', () => {
    const list = {
      name: 'me',
      id: 1,
      grade: 50,
    };

    const list2 = {
      name: 'me',
      id: 1,
      average: 10,
    };

    for (const [property, value] of Object.entries(list)) {
      if (property in list2) {
        expect(list2[property]).toEqual(value);
      }
    }
  });

  it('find item from array', () => {
    const arays = ['jim', 'nok', 'bok'];
    expect(arays.some((array) => array.includes('ok'))).toBeTruthy();
  });
});
