const { Say, Ask } = require('../../snippets/export-module/speech');

describe('use speech', function () {
  it('should say and ask', function () {
    const say = new Say();
    const ask = new Ask();

    say.hello();
    ask.where();
    ask.bye();
    say.bye();
  });
});
