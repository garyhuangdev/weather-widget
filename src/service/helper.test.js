describe('Mock temp convert', () => {
  test(' 25C convert to 77F', () => {
    const tempConvert = jest.fn(x => parseInt(x * 1.8 + 32));
    expect(tempConvert(25)).toBe(77);
  });
});

describe('Mock icon convert', () => {
  test(' 04n convert to 04d', () => {
    const iconConvert = jest.fn(x => String(x).replace('n', 'd'));
    expect(iconConvert('04n')).toBe('04d');
  });
});
