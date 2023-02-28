import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackNavigatorParamList} from '../../navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors, fonts, padding} from '../../styles/base';
import CharacterBasic from '../../components/CharacterBasic';
import Header from '../../components/Header';

type charactersProp = NativeStackScreenProps<
  MainStackNavigatorParamList,
  'Characters'
>;

type charactersRouteProp = RouteProp<MainStackNavigatorParamList, 'Characters'>;

const Characters = () => {
  const route = useRoute<charactersRouteProp>();

  return (
    <View style={styles.container}>
      <Header title="Characters" />
      <View style={styles.characterBasicContainer}>
        <CharacterBasic />
        <CharacterBasic />
        <CharacterBasic />
        <CharacterBasic />
      </View>
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darker,
    padding: padding.md,
  },
  header: {
    fontSize: fonts.lg,
    fontWeight: '900',
    marginVertical: 10,
  },
  characterBasicContainer: {},
});
