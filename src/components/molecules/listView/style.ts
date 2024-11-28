import {StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../../../utils/colors';
import {moderateScale} from '../../../utils/common/helper';

export const styles = StyleSheet.create({
  userList: {
    marginVertical: moderateScale(15),
    flexDirection: 'row',
  },
  profile: {
    backgroundColor: COLOR_PRIMARY,
    height: moderateScale(40),
    width: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(4),
  },
  profileText: {
    color: COLOR_SECONDARY,
    fontSize: moderateScale(15),
    textAlign: 'center',
  },
  listName: {
    paddingLeft: moderateScale(12),
  },
  name: {
    color: COLOR_BLACK,
    fontSize: moderateScale(16),
  },
  role: {
    color: COLOR_BLACK,
    textTransform: 'capitalize',
  },
});
