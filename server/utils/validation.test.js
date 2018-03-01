const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should generate non-string values', () => {
    expect(isRealString(123)).toBe(false);
  });

  it('should reject if only spaces', () => {
    const res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space chars', () => {
    const res = isRealString(' TIM ');
    expect(res).toBe(true);
  })
});
