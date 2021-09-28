import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { StackNavigationOptions } from '@react-navigation/stack';
import Home from './Home';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import { useNaviagtionHorizontalInterpolator } from '../hooks';

export type StackParamList = {
  Home: undefined;
  HomeLeft: undefined;
  HomeRight: {
    name: string;
    age: number;
  };
};

const Stack = createStackNavigator<StackParamList>();

const MainNavigator = () => {
  const interpolator = useNaviagtionHorizontalInterpolator();
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal-inverted',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="HomeLeft"
        component={HomeLeft}
        options={leftOptions}
      />
      <Stack.Screen
        name="HomeRight"
        component={HomeRight}
        options={rightOptions}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
