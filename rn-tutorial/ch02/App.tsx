import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Person from './src/screens/Person'
import * as D from './src/data'
import Topbar from './src/components/Topbar'
import BottomBar from './src/components/BottomBar'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [people, setPeople] = useState(D.makeArray(1).map(D.createRandomPerson))
  const [peopleNum, setPeopleNum] = useState(0)

  return (
    <SafeAreaView
      style={[
        styles.safeAreaView,
        { backgroundColor: Color(Colors.blue500).alpha(0.2).string() },
      ]}>
      <ImageBackground
        style={{ flex: 1, width: '100%', alignItems: 'center', }}
        source={require('./src/assets/images/bg.jpg')}>
        <Topbar />
        <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexWrap: 'wrap', alignItems: 'center', }}>
          <TextInput
            style={{ color: 'white' }}
            placeholderTextColor="white"
            placeholder="input number"
            onChangeText={(text: string) => setPeopleNum(parseInt(text, 10))}
          />
          <TouchableHighlight
            style={{ backgroundColor: '#00000080', width: '100%' }}
            onPress={() => {
              if (peopleNum === 0) {
                return
              }
              setPeople(D.makeArray(peopleNum).map(D.createRandomPerson))
              setIsLoading(!isLoading)
            }}>
            <Text
              style={[
                styles.text,
                { color: Colors.purple600, textAlign: 'center', },
              ]}>
              Click!
            </Text>
          </TouchableHighlight>
          {!isLoading &&
            people.map(person => <Person key={person.id} person={person} />)}
        </ScrollView>
        <BottomBar />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
  },
})

export default App
