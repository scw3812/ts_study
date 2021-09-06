import React from 'react'
import type { FC } from 'react'
import { View, Text, Button, Alert, Image } from 'react-native'
import * as D from '../data'

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({ person }) => {
  return (
    <View style={{ padding: 10 }}>
      <Image source={{ uri: person.avatar }} style={{ width: 50, height: 50, borderRadius: 25, }}/>
      <Text>{JSON.stringify(person, null, 2)}</Text>
      <Button title="name" onPress={() => Alert.alert('name', person.name)} />
    </View>
  )
}

export default Person
