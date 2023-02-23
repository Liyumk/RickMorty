import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';

export interface CategoryProps {
  title?: string;
  onPress: () => void;
  source: ImageSourcePropType;
  imageStyle: StyleProp<ImageStyle>;
}

const Category: FC<CategoryProps> = ({title, onPress, source, imageStyle}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={source} style={[styles.backgroundImage, imageStyle]} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
