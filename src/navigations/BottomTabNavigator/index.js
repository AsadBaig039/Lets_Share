import * as React from 'react';
import BottomTabIcon from '../../components/BottomTabComponents/BottomTabIcon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../ScreenStacks/HomeStack';
import SpaceShareStack from '../ScreenStacks/SpaceShareStack';
import RideShareStack from '../ScreenStacks/RideShareStack';
import UtilitiesShareStack from '../ScreenStacks/UtilitiesShareStack';
import Inbox from '../../screens/ModulesScreens/InboxScreen';
import Utilities from '../../screens/ModulesScreens/UtilitiesScreen';
import UserManagerStack from '../ScreenStacks/UserManagerStack';
import styles from 'res/styles/index.styles.js';
import AuthenticationStack from '../ScreenStacks/AuthenticationStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {
  BottomTabText,
  BottomTabFocusedText,
} from 'res/UniversalComponents/Text.js';
import { round } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const TabBarLabel = ({focused, Title}) => {
  if (focused) {
    return <BottomTabFocusedText>{Title}</BottomTabFocusedText>;
  } else {
    return <BottomTabText>{Title}</BottomTabText>;
  }
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        allowFontScaling: true,
        style: styles.bottomTabHeight,
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
            if (routeName === 'Home') {
              return true;
            }
            return false;
          })(route),

          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="home-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Home" />
          ),
        })}
      />
      <Tab.Screen
        name="SpaceStack"
        component={SpaceShareStack}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? ('SpaceStack' || 'SpaceShareHome');
            if (routeName === 'SpaceStack' || routeName === 'SpaceShareHome') {
              return true;
            }
            return false;
          })(route),
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="ios-business-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Spaces" />
          ),
        })}
      />
      <Tab.Screen
        name="RideStack"
        component={RideShareStack}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName =
<<<<<<< HEAD
              getFocusedRouteNameFromRoute(route) ??
              ('RideStack' || 'RideShareHome');
=======
              getFocusedRouteNameFromRoute(route) ?? ('RideStack' || 'RideShareHome');
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
            if (routeName === 'RideStack' || routeName === 'RideShareHome') {
              return true;
            }
            return false;
          })(route),
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon name="car-outline" color={color} focused={focused} />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Rides" />
          ),
        })}
      />
      <Tab.Screen
        name="Utilities"
        component={UtilitiesShareStack}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? ('Utilities' || 'UtilitiesShareHome');
            if (routeName === 'Utilities' || routeName === 'UtilitiesShareHome') {
              return true;
            }
            return false;
          })(route),
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="basket-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Utilities" />
          ),
        })}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Inbox';
            if (routeName === 'Inbox') {
              return true;
            }
            return false;
          })(route),
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="chatbox-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Inbox" />
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={UserManagerStack}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Profile';
            if (routeName === 'Profile') {
              return true;
            }
            return false;
          })(route),
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="person-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Profile" />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
