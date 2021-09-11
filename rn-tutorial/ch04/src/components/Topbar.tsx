import React, { useCallback } from 'react'
import type { FC, Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

export interface TopbarProps {
  setPeopleState: Dispatch<SetStateAction<D.IPerson[]>>
}

const Topbar: FC<TopbarProps> = ({ setPeopleState }) => {
  const add = useCallback(() => setPeopleState(prevPeople => [D.createRandomPerson(), ...prevPeople]), [setPeopleState])
  const deleteAll = useCallback(() => setPeopleState(() => []), [setPeopleState])

  return (
    <View style={styles.view}>
      <Text style={[styles.text]} onPress={add}>
        add
      </Text>
      <Text style={[styles.text]} onPress={deleteAll}>
        delete all
      </Text>
    </View>
  )
}

export { Topbar }

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: Colors.lightBlue700,
  },
  text: { fontSize: 20, color: 'white' },
})
