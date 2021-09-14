import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Themed from './Themed';
import Imperative from './Imperative';

const MainNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'thmed', title: 'Themed', icon: 'home' },
    { key: 'imperative', title: 'Imperative', icon: 'keyboard-settings' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    thmed: Themed,
    imperative: Imperative,
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
