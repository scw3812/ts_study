import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native'
import { Colors } from 'react-native-paper'
import { useToggle, useTimeout } from '../hooks'

const Timer = () => {
  const [loading, toggleLoading] = useToggle(true)
  useTimeout(() => loading && toggleLoading(), 3000, [loading])

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'} />
      {loading && <ActivityIndicator size="large" color={Colors.deepPurple700} />}
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: Colors.yellow300 },
  text: { fontSize: 30, fontWeight: '600' },
})
