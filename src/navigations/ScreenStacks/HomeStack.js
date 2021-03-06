import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import HomeSearchScreen from '../../screens/GeneralScreens/SearchScreen';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeSearchScreen" component={HomeSearchScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
