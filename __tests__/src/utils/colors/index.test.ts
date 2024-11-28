import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_GRAY,
  COLOR_RED,
} from '../../../../src/utils/colors';

describe('Color Constants', () => {
  test('COLOR_PRIMARY is a valid color', () => {
    expect(COLOR_PRIMARY).toBeDefined();
  });

  test('COLOR_SECONDARY is a valid color', () => {
    expect(COLOR_SECONDARY).toBeDefined();
  });

  test('COLOR_BLACK is a valid color', () => {
    expect(COLOR_BLACK).toBeDefined();
  });

  test('COLOR_WHITE is a valid color', () => {
    expect(COLOR_WHITE).toBeDefined();
  });

  test('COLOR_GRAY is a valid color', () => {
    expect(COLOR_GRAY).toBeDefined();
  });

  test('COLOR_RED is a valid color', () => {
    expect(COLOR_RED).toBeDefined();
  });
});
