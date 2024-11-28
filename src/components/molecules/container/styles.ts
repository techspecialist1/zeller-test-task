import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../../utils/colors';
import {moderateScale} from '../../../utils/common/helper';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 0.7,
    padding: moderateScale(16),
    backgroundColor: COLOR_WHITE,
  },
});
