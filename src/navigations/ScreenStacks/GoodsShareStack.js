import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoodsShareHomeScreen from '../../screens/ModulesScreens/GoodsShareScreens';
import CreateGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/CreateGoodsScreen';
import AddGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/CreateGoodsScreen/AddGoodsScreen';
import DonateGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/CreateGoodsScreen/DonateGoodsScreen';
import SellGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/CreateGoodsScreen/SellGoodsScreen';
import RecentlySharedScreen from '../../screens/ModulesScreens/GoodsShareScreens/RecentlySharedScreen';
import AvailDonatedGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/AvailDonatedGoodsScreen';
import AvailGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/AvailGoodsScreen';
import SharedGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/SharedGoodsScreen';
import GoodsBookingRequestsScreen from '../../screens/ModulesScreens/GoodsShareScreens/GoodsBookingRequestsScreen';

import AvailGoodsDetailScreen from '../../screens/ModulesScreens/GoodsShareScreens/AvailGoodsDetailScreen';
import BookGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/BookGoodsScreen';
import AvailedGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/AvailedGoodsScreen';

const Stack = createStackNavigator();

function GoodsShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GoodsShareHome" component={GoodsShareHomeScreen} />
      <Stack.Screen name="CreateGoodsScreen" component={CreateGoodsScreen} />
      <Stack.Screen name="AddGoodsScreen" component={AddGoodsScreen} />
      <Stack.Screen name="DonateGoodsScreen" component={DonateGoodsScreen} />
      <Stack.Screen name="SellGoodsScreen" component={SellGoodsScreen} />
      <Stack.Screen
        name="RecentlySharedScreen"
        component={RecentlySharedScreen}
      />
      <Stack.Screen
        name="AvailDonatedGoodsScreen"
        component={AvailDonatedGoodsScreen}
      />
      <Stack.Screen name="AvailGoodsScreen" component={AvailGoodsScreen} />
      <Stack.Screen name="SharedGoodsScreen" component={SharedGoodsScreen} />
      <Stack.Screen
        name="GoodsBookingRequests"
        component={GoodsBookingRequestsScreen}
      />

      <Stack.Screen
        name="AvailGoodsDetail"
        component={AvailGoodsDetailScreen}
      />
      <Stack.Screen name="BookGoods" component={BookGoodsScreen} />
      <Stack.Screen name="AvailedGoods" component={AvailedGoodsScreen} />
    </Stack.Navigator>
  );
}

export default GoodsShareNavigator;
