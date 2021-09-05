import React from 'react'
import type { FC } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import * as D from '../data'

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({ person }) => {
  return (
    <View>
      <Text>{JSON.stringify(person, null, 2)}</Text>
      <Button title="name" onPress={() => Alert.alert('name', person.name)} />
    </View>
  )
}

export default Person
