import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from './Home';

const MainNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'life', title: 'LifeCycle', icon: 'page-layout-header-footer' },
    { key: 'timer', title: 'Timer', icon: 'clock-time-four' },
    { key: 'interval', title: 'Interval', icon: 'timeline' },
    { key: 'fetch', title: 'Fetch', icon: 'history' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    life: Home,
    timer: Home,
    interval: Home,
    fetch: Home,
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
