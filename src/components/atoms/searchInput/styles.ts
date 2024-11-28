import {StyleSheet} from 'react-native';
import {COLOR_GRAY} from '../../../utils/colors';
import {moderateScale} from '../../../utils/common/helper';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(8),
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: COLOR_GRAY,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
  },
});
