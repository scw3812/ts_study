import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import PanRes from './PanRes';
import LeftSwipe from './LeftSwipe';
import Drag from './Drag';

const MainNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'sequence', title: 'PanRes', icon: 'alpha-b-box' },
    { key: 'parallel', title: 'Drag', icon: 'eye-circle' },
    { key: 'stagger', title: 'LeftSwipe', icon: 'file-eye' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    sequence: PanRes,
    parallel: Drag,
    stagger: LeftSwipe,
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
