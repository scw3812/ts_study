import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native-paper';

const Imperative = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Imperative</Text>
    </View>
  );
};

export default Imperative;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
});
