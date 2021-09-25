import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Sequence from './Sequence';
import Parallel from './Parallel';
import Stagger from './Stagger';
import EnterExit from './EnterExit';

const MainNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'sequence', title: 'Sequence', icon: 'alpha-b-box' },
    { key: 'parallel', title: 'Parallel', icon: 'eye-circle' },
    { key: 'stagger', title: 'Stagger', icon: 'file-eye' },
    { key: 'enter', title: 'EnterExit', icon: 'bullseye' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    sequence: Sequence,
    parallel: Parallel,
    stagger: Stagger,
    enter: EnterExit,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainNavigator;
