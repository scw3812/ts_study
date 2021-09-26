import { useMemo } from 'react';
import { PanResponder } from 'react-native';
import type { PanResponderCallbacks, PanResponderInstance } from 'react-native';

const defaultCallback: PanResponderCallbacks = {
  onStartShouldSetPanResponder: (_) => true,
  onMoveShouldSetPanResponder: (_) => true,
};

export const usePanResponder = (
  callbacks: PanResponderCallbacks,
  deps: any[] = [],
): PanResponderInstance => {
  const panResponder = useMemo(
    () => PanResponder.create({ ...defaultCallback, ...callbacks }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
  return panResponder;
};
