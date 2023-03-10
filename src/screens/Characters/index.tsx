import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  MainStackNavigatorParamList,
  ScreenParamList,
} from '../../navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors, fonts, padding} from '../../styles/base';
import CharacterBasic from '../../components/CharacterBasic';
import Header from '../../components/Header';

type CharactersProps = ScreenParamList<'Characters'>;

const Characters: CharactersProps = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header title="Characters" />
      <ScrollView contentContainerStyle={styles.characterBasicContainer}>
        <CharacterBasic />
        <CharacterBasic />
        <CharacterBasic />
        <CharacterBasic />
        <CharacterBasic />
        <CharacterBasic />
      </ScrollView>
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darker,
    padding: padding.md,
    paddingVertical: 0,
  },
  header: {
    fontSize: fonts.lg,
    fontWeight: '900',
    marginVertical: 10,
  },
  characterBasicContainer: {paddingBottom: 10},
});
