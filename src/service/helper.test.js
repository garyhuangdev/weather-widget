import { tempConvert, iconConvert } from './helper';

describe('Mock temp convert', () => {
  test(' 25C convert to 77F', () => {
    expect(tempConvert('fahrenheit', 25)).toBe('77 °F');
  });
});

describe('Mock icon convert', () => {
  test(' 04n convert to 04d', () => {
    expect(iconConvert('04n')).toBe('04d');
  });
});
