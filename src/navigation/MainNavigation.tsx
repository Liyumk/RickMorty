import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Characters from '../screens/Characters';
import {MainStackNavigatorParamList} from './types';

const MainStack = createNativeStackNavigator<MainStackNavigatorParamList>();

export default function MainNavigationStack() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Characters" component={Characters} />
    </MainStack.Navigator>
  );
}
