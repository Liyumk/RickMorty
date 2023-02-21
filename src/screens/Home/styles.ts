import {StyleSheet} from 'react-native';
import {baseStyles, colors, dimensions} from '../../../app/styles/base';

export const styles = StyleSheet.create({
  ...baseStyles,
  titleImage: {
    height: dimensions.fullWidth / 3,
    maxWidth: dimensions.fullWidth,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    flexWrap: 'wrap',
    gap: 15,
  },
});
