import React, { useMemo, useState } from 'react'
import type { FC } from 'react'
import { SafeAreaView, StyleSheet, FlatList, View, Text, ScrollView, Dimensions } from 'react-native'
import { Colors } from 'react-native-paper'
import PersonUsingValueState from './src/screens/PersonUsingValueState'
import PersonUsingObjectState from './src/screens/PersonUsingObjectState'
import PersonUsingPassingState from './src/screens/PersonUsingPassingState'
import * as D from './src/data'
import { Topbar } from './src/components'

const { width } = Dimensions.get('window')

interface PersonInformation {
  title: string
  Component: FC<any>
}

const personInfomations: PersonInformation[] = [
  { title: 'PersonUsingValueState', Component: PersonUsingValueState },
  { title: 'PersonUsingObjectState', Component: PersonUsingObjectState },
  { title: 'PersonUsingPassingState', Component: PersonUsingPassingState },
]

const numberOfComponents = personInfomations.length

const App = () => {
  const people = useMemo(() => D.makeArray(1).map(D.createRandomPerson), [])
  const [peopleState, setPeopleState] = useState(people)

  const children = useMemo(
    () =>
      personInfomations.map(({ title, Component }: PersonInformation) => (
        <View style={styles.flex} key={title}>
          <Text style={styles.text}>{title}</Text>
          <FlatList
            data={peopleState}
            renderItem={({ item }) => <Component person={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        </View>
      )),
    [peopleState],
  )
  return (
    <SafeAreaView style={styles.flex}>
      <Topbar setPeopleState={setPeopleState} />
      <ScrollView horizontal contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  contentContainerStyle: { width: width * numberOfComponents },
  itemSeperator: { borderWidth: 1, borderColor: Colors.grey500 },
  text: { fontSize: 24, textAlign: 'center' },
})

export default App
