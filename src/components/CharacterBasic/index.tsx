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
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} resizeMode="cover" style={styles.image} />
      </View>
      {/* Description */}
      <View style={styles.descriptionsContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.status}>
          <View style={styles.statusIndicatorContainer}>
            <StatusIndicator
              size={12}
              color={
                status === 'Dead' ? 'red' : status === 'unknown' ? 'grey' : null
              }
            />
          </View>
          <Text style={styles.descriptionsText}>
            {status} - {species}
          </Text>
        </View>
        <Text style={styles.descriptionsText}>
          {gender === 'unknown' && '🤷‍♂️'}
          {gender === 'Male' && '🧔‍♂️'}
          {gender === 'Female' && '👩'}
          {'  '}
          {gender}
        </Text>
        <Text style={styles.descriptionsTextPlanet}>
          Last known location: {location.name.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default CharacterBasic;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 20,
    minHeight: 180,
    backgroundColor: colors.primary,
    paddingRight: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 10,
  },
  descriptionsContainer: {
    paddingTop: 10,
    flex: 1,
  },
  descriptionsText: {
    fontWeight: '600',
    marginTop: 6,
    color: colors.quaternary,
  },
  descriptionsTextPlanet: {
    marginTop: 6,
    color: colors.quaternary,
    fontWeight: '900',
    width: 165,
    lineHeight: 20,
  },
  descriptionsTextContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 180,
    height: 180,
  },
  imageContainer: {flex: 1},
  name: {
    fontSize: fonts.md,
    fontWeight: '600',
    color: colors.tertiary,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    marginTop: 5,
  },
  statusIndicatorContainer: {
    paddingTop: 5,
  },
});
