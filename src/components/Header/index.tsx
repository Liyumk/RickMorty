import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../styles/base';
import {useNavigation} from '@react-navigation/native';

export interface HeaderProps extends PropsWithChildren {
  containerStyle?: ViewStyle;
  icon?: any;
  iconSize?: number;
  headerTextStyle?: TextStyle;
  title: string;
}

const Header = ({
  children,
  containerStyle,
  headerTextStyle,
  icon,
  iconSize = 45,
  title,
}: HeaderProps): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, containerStyle]}>
      {icon ? (
        icon
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MIIcon name="chevron-left" size={iconSize} color={colors.white} />
        </TouchableOpacity>
      )}
      <Text style={[styles.headerText, headerTextStyle]}>{title}</Text>
      {children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  headerText: {
    fontSize: fonts.lg,
    fontWeight: '600',
    color: colors.white,
  },
});
