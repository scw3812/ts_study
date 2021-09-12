import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import { useLayout } from '../hooks/useLayout'

const LifeCycle = () => {
  const [layout, setLayout] = useLayout()

  return (
    <View style={styles.view} onLayout={setLayout}>
      <Text style={styles.text}>LifeCycle</Text>
      <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
    </View>
  )
}

export default LifeCycle

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
})
