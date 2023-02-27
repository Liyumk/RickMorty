import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../styles/base';

const CharacterBasic = () => {
  const uri = '';
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: uri}} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.descriptionsContainer}>
        <Text>hey there</Text>
      </View>
    </View>
  );
};

export default CharacterBasic;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 150,
    backgroundColor: colors.primary,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  descriptionsContainer: {},
  image: {},
  imageContainer: {},
});
