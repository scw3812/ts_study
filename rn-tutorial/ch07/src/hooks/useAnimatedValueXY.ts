import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimatedValueXY = (
  initialValue: { x: number; y: number } = { x: 0, y: 0 },
): Animated.ValueXY => useRef(new Animated.ValueXY(initialValue)).current;
