import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_PRIMARY} from '../../../utils/colors';
import {moderateScale} from '../../../utils/common/helper';

export const styles = StyleSheet.create({
  userTypeView: {
    paddingVertical: moderateScale(10),
  },
  userTypeText: {
    fontWeight: '700',
    fontSize: moderateScale(20),
    color: COLOR_BLACK,
  },
  listView: {
    marginTop: moderateScale(10),
  },
  listUserTest: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: COLOR_BLACK,
    textTransform: 'capitalize',
  },
  line: {
    height: moderateScale(1.5),
    backgroundColor: COLOR_PRIMARY,
    marginVertical: moderateScale(10),
  },
  userNameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  refreshTest: {
    color: COLOR_BLACK,
  },
});
