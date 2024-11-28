import {StyleSheet} from 'react-native';
import {height, width} from '../../../utils/common/helper';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
