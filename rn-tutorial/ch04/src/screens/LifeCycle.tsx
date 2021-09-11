import React, { useEffect, useLayoutEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import type { LayoutChangeEvent } from 'react-native'
import { Colors } from 'react-native-paper'

const LifeCycle = () => {
  useEffect(() => {
    console.log(Platform.OS, 'useEffect called')
    return () => console.log(Platform.OS, 'useEffect finished')
  }, [])
  useLayoutEffect(() => {
    console.log(Platform.OS, 'useLayoutEffect called')
    return () => console.log(Platform.OS, 'useLayoutEffect finished')
  }, [])
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { layout } = e.nativeEvent
    console.log(Platform.OS, 'onLayout called', layout)
  }, [])

  console.log('render start')
  return (
    <View style={styles.view} onLayout={onLayout}>
      <Text style={styles.text}>LifeCycle</Text>
    </View>
  )
}

export default LifeCycle

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
})
