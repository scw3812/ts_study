import { useState, useEffect } from 'react';
import { Animated } from 'react-native';

export const useMonitorAnimatedValue = (animValue: Animated.Value): number => {
  const [realAnimValue, setRealAnimValue] = useState(0);

  useEffect(() => {
    const id = animValue.addListener((state: { value: number }) =>
      setRealAnimValue(state.value),
    );
    return () => animValue.removeListener(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return realAnimValue;
};
