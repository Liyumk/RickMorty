import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../styles/base';
import StatusIndicator from '../StatusIndicator';

const CharacterBasic = () => {
  const uri = 'https://robohash.org/rickhloy';
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: uri}} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.descriptionsContainer}>
        <Text style={styles.name}>Rick Sanches</Text>
        <View style={styles.status}>
          <StatusIndicator />
          <Text style={styles.descriptionsText}> Alive - Human</Text>
        </View>
        <Text style={styles.descriptionsText}>🚹 Male</Text>
        <Text style={styles.descriptionsText}>
          Last seen on <Text style={styles.planet}>Earth</Text>
        </Text>
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

    paddingRight: 10,
    borderRadius: 5,
  },
  descriptionsContainer: {
    paddingTop: 10,
  },
  image: {
    width: 180,
    height: 150,
  },
  imageContainer: {width: 200},
  name: {
    fontSize: fonts.md,
    fontWeight: '600',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    marginTop: 5,
  },
  descriptionsText: {
    fontWeight: '600',
    marginTop: 5,
  },
  planet: {
    fontWeight: '900',
  },
});