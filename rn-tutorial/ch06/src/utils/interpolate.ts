import { Animated } from 'react-native';

export const interpolate = (
  animValue: Animated.Value,
  outputRange: number[] | string[],
  inputRange: number[],
): Animated.AnimatedInterpolation =>
  animValue.interpolate({ inputRange, outputRange });
