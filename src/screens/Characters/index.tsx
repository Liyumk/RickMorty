import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  MainStackNavigatorParamList,
  ScreenParamList,
} from '../../navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors, fonts, padding} from '../../styles/base';
import CharacterBasic from '../../components/CharacterBasic';
import Header from '../../components/Header';
import {useCharacters} from '../../hooks/api/useCharacters/index';
import {Character} from '../../types/Characters';

type CharactersProps = ScreenParamList<'Characters'>;

const Characters: CharactersProps = ({navigation, route}) => {
  const {data, isError, isLoading} = useCharacters();

  const CharacterBasicItem = useCallback(
    ({name, status, gender, image, location, species}: Character) => {
      const charProps = {name, status, gender, image, location, species};
      return <CharacterBasic {...charProps} />;
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Header title="Characters" />
      {!isError && (
        <FlatList
          style={styles.characterBasicContainer}
          data={data?.results}
          renderItem={({item}) => <CharacterBasicItem {...item} />}
        />
      )}
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
