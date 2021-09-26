import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainNavigator = () => {
  return (
    <View style={styles.view}>
      <Text>tab</Text>
    </View>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
