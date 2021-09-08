import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconSize = 30, iconColor = 'white'
const icons = ['home', 'table-search', 'face-profile-woman', 'account-settings']

const BottomBar = () => {
  const children = icons.map(name => <Icon key={name} name={name} size={iconSize} color={iconColor} />)
  return (
    <View style={styles.view}>
      {children}
    </View>
  )
}

export { BottomBar }

const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: Colors.lightBlue500
  }
})
