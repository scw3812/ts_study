import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import MainNavigator from './src/screens/MainNavigator'

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <MainNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
})

export default App
