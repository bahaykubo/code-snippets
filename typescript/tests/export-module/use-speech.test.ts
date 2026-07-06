import { Say, Ask } from '../../snippets/export-module/speech';

describe('use speech', () => {
  it('should say and ask', () => {
    const say = new Say();
    const ask = new Ask();

    say.hello();
    ask.where();
    ask.bye();
    say.bye();
  });
});
