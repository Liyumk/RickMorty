import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackNavigatorParamList = {
  Home: undefined;
  Characters: undefined;
};

export type ScreenParamList<T extends keyof MainStackNavigatorParamList> = (
  props: NativeStackScreenProps<MainStackNavigatorParamList, T>,
) => JSX.Element | null;
