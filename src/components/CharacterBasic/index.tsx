import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../styles/base';
import StatusIndicator from '../StatusIndicator';
import {Character} from '../../types/Characters';

type CharBasic = Pick<
  Character,
  'name' | 'status' | 'gender' | 'location' | 'image' | 'species'
>;

const CharacterBasic = ({
  name,
  status,
  gender,
  location,
  image,
  species,
}: CharBasic) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.descriptionsContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.status}>
          <View style={styles.statusIndicatorContainer}>
            <StatusIndicator size={12} />
          </View>
          <Text style={styles.descriptionsText}>
            {' '}
            {status} - {species}
          </Text>
        </View>
        <Text style={styles.descriptionsText}>♂️ {gender}</Text>
        <View style={styles.descriptionsTextContainer}>
          <Text style={styles.descriptionsTextPlanet}>
            Planet: <Text style={styles.planet}>{location.name}</Text>
          </Text>
        </View>
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
    marginTop: 10,
  },
  descriptionsContainer: {
    paddingTop: 15,
  },
  descriptionsText: {
    fontWeight: '600',
    marginTop: 6,
    color: colors.quaternary,
  },
  descriptionsTextPlanet: {
    fontWeight: '600',
    marginTop: 6,
    color: colors.quaternary,
  },
  descriptionsTextContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 180,
    height: 150,
  },
  imageContainer: {width: 200},
  name: {
    fontSize: fonts.md,
    fontWeight: '600',
    color: colors.tertiary,
  },
  planet: {
    fontWeight: '900',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    marginTop: 5,
  },
  statusIndicatorContainer: {
    paddingTop: 5,
  },
});
