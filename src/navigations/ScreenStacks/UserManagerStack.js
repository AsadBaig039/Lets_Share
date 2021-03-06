import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserManagerHomeScreen from '../../screens/ModulesScreens/UserManagementScreens';
import EditProfileScreen from '../../screens/ModulesScreens/UserManagementScreens/EditProfileScreen';

const Stack = createStackNavigator();

function UserManagerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserManagerHome" component={UserManagerHomeScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

export default UserManagerNavigator;
