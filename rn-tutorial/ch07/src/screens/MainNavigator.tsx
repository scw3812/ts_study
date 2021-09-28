import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type {
  RouteProp,
  ParamListBase,
  NavigatorScreenParams,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';

import Login from './Login';
import SignUp from './SignUp';
import HomeNavigator from './HomeNavigator';
import type { StackParamList } from './HomeNavigator';

export type TabParamList = {
  Login: undefined;
  SignUp: undefined;
  HomeNavigator: NavigatorScreenParams<StackParamList>;
};

export type NavigationProp<T extends 'Login' | 'SignUp' | 'HomeNavigator'> =
  CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, T>,
    StackNavigationProp<StackParamList>
  >;

export type NestedNavigationProp<T extends 'Home' | 'HomeLeft' | 'HomeRight'> =
  CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList>,
    StackNavigationProp<StackParamList, T>
  >;

type TabBarIconProps = { focused: boolean; color: string; size: number };

const icons: Record<string, string[]> = {
  HomeNavigator: ['home-circle', 'home-circle-outline'],
  Login: ['account-search', 'account-search-outline'],
  SignUp: ['account-clock', 'account-clock-outline'],
};

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => {
  return {
    tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
      const { name } = route;
      const focusedSize = focused ? size + 6 : size;
      const focusedColor = focused ? Colors.lightBlue500 : color;
      const [icon, iconOutline] = icons[name];
      const iconName = focused ? icon : iconOutline;

      return <Icon name={iconName} size={focusedSize} color={focusedColor} />;
    },
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator<TabParamList>();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{ tabBarLabel: 'Home', tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
