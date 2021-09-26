import { useState, useEffect } from 'react';
import { Animated } from 'react-native';

export type XY = { x: number; y: number };

export const useMonitorAnimatedValueXY = (animValueXY: Animated.ValueXY) => {
  const [realAnimValueXY, setRealAnimValueXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = animValueXY.addListener((value: XY) =>
      setRealAnimValueXY(value),
    );
    return () => animValueXY.removeListener(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return realAnimValueXY;
};
