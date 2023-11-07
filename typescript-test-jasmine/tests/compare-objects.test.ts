describe('Compare Test', function () {
  it('compare two objects', function () {
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
    expect(arays.some((aray) => aray.includes('ok'))).toBeTruthy();
  });
});
