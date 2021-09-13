import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native-paper';

const KeyboardAvoid = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>KeyboardAvoid</Text>
    </View>
  );
};

export default KeyboardAvoid;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
});
