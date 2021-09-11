import React, { useCallback, useState } from 'react'
import type { FC } from 'react'
import { View, Text, Alert, Image } from 'react-native'
import moment from 'moment-with-locales-es6'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import { styles } from './Person.style'
import { Avatar } from '../components'
import PersonIcons from './PersonIcons'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}

const PersonUsingPassingState: FC<PersonProps> = ({ person }) => {
  const [newPerson, setNewPerson] = useState(person)

  const avatarPressed = useCallback(() => Alert.alert('avatar'), [])
  const deletePressed = useCallback(() => Alert.alert('delete'), [])

  return (
    <View style={styles.view}>
      <View style={styles.leftView}>
        <Avatar imageStyle={styles.avatar} uri={person.avatar} size={50} onPress={avatarPressed} />
      </View>
      <View style={styles.rightView}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.email}>{person.email}</Text>
        <View style={styles.dateView}>
          <Text style={styles.text}>{moment(person.createdDate).startOf('day').fromNow()}</Text>
          <Icon name="trash-can-outline" size={26} color={Colors.lightBlue500} onPress={deletePressed} />
        </View>
        <Text style={[styles.text, styles.comments]} numberOfLines={3} ellipsizeMode="tail">
          {person.comments}
        </Text>
        <Image source={{ uri: person.image }} style={styles.image} />
        <PersonIcons person={newPerson} setNewPerson={setNewPerson} />
      </View>
    </View>
  )
}

export default PersonUsingPassingState
