import {StyleSheet} from 'react-native';
import {colors, dimensions, fonts, padding} from '../../../app/styles/base';

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (dimensions.fullWidth - 40) / 2,
    height: 180,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    position: 'relative',
  },
  text: {
    fontSize: fonts.lg,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 95, 80, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
