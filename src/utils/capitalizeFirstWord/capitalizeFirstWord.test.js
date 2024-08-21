import { capitalizeFirstWord } from './capitalizeFirstWord';

describe('capitalizeFirstWord', () => {
  test('capitalizes the first character of a word', () => {
    const result = capitalizeFirstWord('hello');
    expect(result).toBe('Hello');
  });

  test('returns the same string if the first character is already capitalized', () => {
    const result = capitalizeFirstWord('Hello');
    expect(result).toBe('Hello');
  });

  test('does nothing to an empty string', () => {
    const result = capitalizeFirstWord('');
    expect(result).toBe('');
  });

  test('returns the same string if it contains only one character', () => {
    const result = capitalizeFirstWord('h');
    expect(result).toBe('H');
  });

  test('handles strings with multiple words', () => {
    const result = capitalizeFirstWord('hello world');
    expect(result).toBe('Hello world');
  });

  test('handles strings with special characters at the beginning', () => {
    const result = capitalizeFirstWord('!hello');
    expect(result).toBe('!hello');
  });

  test('returns the same string if it starts with a whitespace', () => {
    const result = capitalizeFirstWord(' hello');
    expect(result).toBe(' hello');
  });
});
