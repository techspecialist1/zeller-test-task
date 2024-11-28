import {
  RADIO_BUTTON_DIMENSIONS,
  STRINGS,
} from '../../../../src/utils/constants';

describe('Constants', () => {
  test('STRINGS object is defined', () => {
    expect(STRINGS).toBeDefined();
  });

  test('STRINGS.USER_TYPE is defined and has a string value', () => {
    expect(STRINGS.USER_TYPE).toBeDefined();
    expect(typeof STRINGS.USER_TYPE).toBe('string');
  });

  test('STRINGS.USER is defined and has a string value', () => {
    expect(STRINGS.USER).toBeDefined();
    expect(typeof STRINGS.USER).toBe('string');
  });

  test('STRINGS.MANAGER is defined and has a string value', () => {
    expect(STRINGS.MANAGER).toBeDefined();
    expect(typeof STRINGS.MANAGER).toBe('string');
  });

  test('STRINGS.ADMIN is defined and has a string value', () => {
    expect(STRINGS.ADMIN).toBeDefined();
    expect(typeof STRINGS.ADMIN).toBe('string');
  });

  test('STRINGS.SEARCH_TEXT is defined and has a string value', () => {
    expect(STRINGS.SEARCH_TEXT).toBeDefined();
    expect(typeof STRINGS.SEARCH_TEXT).toBe('string');
  });

  test('RADIO_BUTTON_DIMENSIONS is defined and has a numeric value', () => {
    expect(RADIO_BUTTON_DIMENSIONS).toBeDefined();
    expect(typeof RADIO_BUTTON_DIMENSIONS).toBe('number');
  });
});
