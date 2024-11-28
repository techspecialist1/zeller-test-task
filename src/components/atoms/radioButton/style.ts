import {StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../../../utils/colors';
import {moderateScale} from '../../../utils/common/helper';

export const styles = StyleSheet.create({
  inActiveButton: {
    paddingVertical: moderateScale(8),
    flexDirection: 'row',
    paddingLeft: moderateScale(8),
    borderRadius: moderateScale(5),
  },
  activeButton: {
    paddingVertical: moderateScale(8),
    flexDirection: 'row',
    paddingLeft: moderateScale(8),
    backgroundColor: COLOR_PRIMARY,
    borderRadius: moderateScale(5),
  },
  radio: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR_SECONDARY,
  },
  fill: {
    backgroundColor: COLOR_SECONDARY,
    width: moderateScale(12),
    height: moderateScale(12),
    borderRadius: moderateScale(6),
  },
  labelView: {
    paddingLeft: moderateScale(10),
    alignSelf: 'center',
  },
  label: {
    textTransform: 'capitalize',
    color: COLOR_BLACK,
  },
});
