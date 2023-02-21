import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts, padding} from '../../../app/styles/base';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (dimensions.fullWidth - 40) / 2,
    height: 180,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: padding.sm,
  },
  text: {
    fontSize: fonts.lg,
    color: colors.white,
    fontWeight: 'bold',
  },
});
