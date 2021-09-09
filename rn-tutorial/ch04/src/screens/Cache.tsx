import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'
import * as D from '../data'
import Person from './Person'
import { createOrUse } from './createOrUse'

const title = 'Cache'
const Cache = () => {
  const people = createOrUse('people', () => D.makeArray(2).map(D.createRandomPerson))

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

export default Cache

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
  flatList: { width: '100%' },
  itemSeperator: { borderWidth: 1, borderColor: Color(Colors.grey500).lighten(0.5).string() },
})
