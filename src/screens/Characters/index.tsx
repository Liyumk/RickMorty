import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackNavigatorParamList} from '../../navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';

type charactersProp = NativeStackScreenProps<
  MainStackNavigatorParamList,
  'Characters'
>;

type charactersRouteProp = RouteProp<MainStackNavigatorParamList, 'Characters'>;

const Characters = () => {
  const route = useRoute<charactersRouteProp>();

  return (
    <View>
      <Text>Characters</Text>
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({});
