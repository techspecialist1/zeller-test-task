import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 850;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.25): number =>
  size + (scale(size) - size) * factor;

export {moderateScale, verticalScale, width, height};
