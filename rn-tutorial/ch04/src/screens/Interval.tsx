import React, { useState, useCallback } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import { Avatar } from '../components'
import * as D from '../data'
import { useToggle, useInterval } from '../hooks'
type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>

const title = 'Interval'
const Interval = () => {
  const [avatars, setAvatars] = useState<IdAndAvatar[]>([])
  const [start, toggleStart] = useToggle(true)
  const clearAvatars = useCallback(() => setAvatars(() => []), [])
  useInterval(() => start && setAvatars(state => [...state, { id: D.randomId(), avatar: D.randomAvatarUri() }]), 1000, [start])

  const children = avatars.map(({ id, avatar }) => <Avatar key={id} uri={avatar} size={70} viewStyle={styles.avatar} />)

  return (
    <View style={styles.view}>
      <View style={styles.topBar}>
        <Text onPress={toggleStart} style={styles.topBarText}>
          {start ? 'stop' : 'start'}
        </Text>
        <Text onPress={clearAvatars} style={styles.topBarText}>
          clear avatars
        </Text>
      </View>
      <Text style={styles.text}>{title}</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>{children}</ScrollView>
    </View>
  )
}

export default Interval

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
  avatar: { padding: 5 },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.blue900,
  },
  topBarText: { fontSize: 20, color: 'white' },
  contentContainerStyle: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
})
