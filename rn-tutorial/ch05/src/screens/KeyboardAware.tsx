import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native-paper';

const KeyboardAware = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>KeyboardAware</Text>
    </View>
  );
};

export default KeyboardAware;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
});
