import lib from '../dist/';

describe('@namespace/one', () => {
  it('needs tests', () => {
    expect(lib().length).toBe(2);
  });
});
