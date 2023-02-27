import {StyleSheet} from 'react-native';
import {baseStyles, dimensions} from '../../styles/base';

export const styles = StyleSheet.create({
  ...baseStyles,
  titleImage: {
    height: dimensions.fullWidth / 3,
    maxWidth: dimensions.fullWidth,
  },
  bottomImage: {
    width: dimensions.fullWidth,
    height: 400,
    resizeMode: 'contain',
  },
  bottomImageContainer: {
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    flexWrap: 'wrap',
    gap: 15,
  },
});
