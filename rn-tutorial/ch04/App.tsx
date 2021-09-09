import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Cache from './src/screens/Cache'
import Memo from './src/screens/Memo'
import Fibo from './src/screens/Fibo'

const { width } = Dimensions.get('window')
const numberOfComponents = 3

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainerStyle}>
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  contentContainerStyle: { width: width * numberOfComponents },
})

export default App
