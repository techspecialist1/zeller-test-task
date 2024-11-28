import {
  moderateScale,
  verticalScale,
} from '../../../../src/utils/common/helper';

describe('Scaling Utility Functions', () => {
  test('moderateScale', () => {
    const originalSize = 20;
    const scaledSize = moderateScale(originalSize);
    expect(scaledSize).toBeGreaterThan(originalSize);
  });

  test('verticalScale', () => {
    const originalSize = 20;
    const scaledSize = verticalScale(originalSize);
    expect(scaledSize).toBeGreaterThan(originalSize);
  });
});
