import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import People from './People';

const MainNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: 'people', title: 'People', icon: 'home' }]);
  const renderScene = BottomNavigation.SceneMap({
    people: People,
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
