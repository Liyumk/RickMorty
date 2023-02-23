import {
  StyleSheet,
  Dimensions,
  StyleSheetProperties,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#1D7874',
  secondary: '#9bc9b3',
  tertiary: '#F4C095',
  quaternary: '#FBE7C6',
  darker: '#071E22',
  black: '#000',
  white: '#FFF',
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 24,
  xl: 28,
  primary: 'Cochin',
};

export const baseStyles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.sm,
    width: dimensions.fullWidth,
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    fontWeight: 'bold',
  },
});
