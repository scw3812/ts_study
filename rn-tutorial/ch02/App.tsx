import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Platform,
  FlatList,
} from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Person from './src/screens/Person'
import * as D from './src/data'
import { Topbar, BottomBar } from './src/components'

const people = D.makeArray(10).map(D.createRandomPerson)

const App = () => {
  return (
    <>
      <SafeAreaView
        style={[
          styles.safeAreaView,
          { backgroundColor: Color(Colors.blue500).alpha(0.2).string() },
        ]}>
        <ImageBackground
          style={{ flex: 1, width: '100%' }}
          source={require('./src/assets/images/bg.jpg')}>
          <Topbar />
          <FlatList
            contentContainerStyle={{ alignItems: 'center' }}
            data={people}
            renderItem={({ item }) => <Person key={item.id} person={item} />}
            keyExtractor={item => item.id}
          />
          <BottomBar />
        </ImageBackground>
      </SafeAreaView>
      <View style={styles.absoluteView}>
        <Icon name="feather" size={50} color="white" />
      </View>
    </>
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
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ ios: 100, android: 80 }),
    padding: 10,
    borderRadius: 35,
  },
})

export default App
