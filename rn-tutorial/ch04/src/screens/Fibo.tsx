import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

const people = D.makeArray(2).map(D.createRandomPerson)

const title = 'Fibo'
const Fibo = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Fibo

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
})
