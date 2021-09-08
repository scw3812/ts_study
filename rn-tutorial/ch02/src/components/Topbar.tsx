import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'

const name = D.randomName()
const avatar = D.randomAvatarUri(name)

const Topbar = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <Text style={[styles.text, styles.centerView]}>{name}</Text>
      <Icon name="menu" size={24} color="white" />
    </View>
  )
}

export { Topbar }

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.amber500,
  },
  text: { fontSize: 20, textAlign: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  centerView: { flex: 1 },
})
