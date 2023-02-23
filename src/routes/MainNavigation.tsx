import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const MainStack = createNativeStackNavigator();

export default function MainNavigationStack() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
}
