import { useMemo } from 'react';
import { Animated } from 'react-native';

const makeArray = (length: number) => new Array(length).fill(null);

export const useAnimatedValues = (length: number, initialValue: number = 0) =>
  useMemo(
    () => makeArray(length).map((_) => new Animated.Value(initialValue)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
