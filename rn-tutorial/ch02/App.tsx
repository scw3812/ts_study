import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Text,
  TextInput,
} from 'react-native'
import Person from './src/screens/Person'
import * as D from './src/data'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [people, setPeople] = useState(D.makeArray(1).map(D.createRandomPerson))
  const [peopleNum, setPeopleNum] = useState(0)

  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          placeholder="input number"
          onChangeText={(text: string) => setPeopleNum(parseInt(text, 10))}
        />
        <TouchableHighlight
          onPress={() => {
            if (peopleNum === 0) {
              return
            }
            setPeople(D.makeArray(peopleNum).map(D.createRandomPerson))
            setIsLoading(!isLoading)
          }}>
          <Text>Click!</Text>
        </TouchableHighlight>
        {!isLoading &&
          people.map(person => <Person key={person.id} person={person} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
