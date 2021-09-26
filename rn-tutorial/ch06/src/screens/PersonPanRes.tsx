/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import type { FC } from 'react';
import { Platform, PanResponder } from 'react-native';
import type {
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';
import * as D from '../data';
import { View, Text } from '../theme/paper';
import { useScrollEnabled } from '../contexts';

const ios = Platform.OS === 'ios';

type Event = GestureResponderEvent;
type State = PanResponderGestureState;

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonPanRes: FC<PersonProps> = () => {
  const [gestureState, setGestureState] = useState<State | null>(null);
  const [scrollEnabled, setScrollEnabled] = useScrollEnabled();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder() {
      return true;
    },
    onPanResponderGrant(_: Event, s: State) {
      ios && setScrollEnabled(false);
      setGestureState(s);
    },
    onPanResponderRelease(_: Event, s: State) {
      setGestureState(s);
      ios && setScrollEnabled(true);
    },
    onMoveShouldSetPanResponder() {
      return true;
    },
    onPanResponderMove(_: Event, s: State) {
      setGestureState(s);
    },
  });

  return (
    <View background style={{ width: '100%' }}>
      <Text>scrollEnabled: {scrollEnabled ? 'true' : 'false'}</Text>
      <View
        accent
        {...panResponder.panHandlers}
        style={{ height: 300, flex: 1 }}>
        {gestureState && <Text>{JSON.stringify(gestureState, null, 2)}</Text>}
      </View>
    </View>
  );
};

export default PersonPanRes;
