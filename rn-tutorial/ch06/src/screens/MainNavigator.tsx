import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Transform from './Transform';
import InsideLayout from './InsideLayout';
import Arithmetic from './Arithmetic';
import Carousel from './Carousel';

const MainNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'transform', title: 'Transform', icon: 'alpha-b-box' },
    { key: 'inside', title: 'InsideLayout', icon: 'eye-circle' },
    { key: 'arith', title: 'Arithmetic', icon: 'file-eye' },
    { key: 'carousel', title: 'Carousel', icon: 'bullseye' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    transform: Transform,
    inside: InsideLayout,
    arith: Arithmetic,
    carousel: Carousel,
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
