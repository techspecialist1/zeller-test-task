import {StyleSheet} from 'react-native';
import {COLOR_RED} from '../../../utils/colors';
import {moderateScale} from '../../../utils/common/helper';

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR_RED,
  },
});
