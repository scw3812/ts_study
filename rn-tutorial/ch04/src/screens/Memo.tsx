import React, { useMemo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'
import * as D from '../data'
import { useClock } from '../hooks/useClock'
import Person from './Person'

const title = 'Memo'
const Memo = () => {
  const time = useClock()
  const people = useMemo(() => D.makeArray(2).map(D.createRandomPerson), [])

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        style={styles.flatList}
        data={people}
        renderItem={({ item }) => <Person person={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
      />
    </View>
  )
}

export default Memo

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
  flatList: { width: '100%' },
  itemSeperator: { borderWidth: 1, borderColor: Color(Colors.grey500).lighten(0.5).string() },
})
