import React from 'react'
import type { FC } from 'react'
import { View, Text, Alert, Image } from 'react-native'
import moment from 'moment-with-locales-es6'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import { styles } from './Person.style'
import { Avatar, IconText } from '../components'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}

const avatarPressed = () => Alert.alert('avatar')
const deletePressed = () => Alert.alert('delete')
const countIconPressed = (name: string) => () => Alert.alert(`${name}`)

const Person: FC<PersonProps> = ({ person }) => {
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
        <View style={styles.countsView}>
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('comment')}
            name="comment"
            size={24}
            color={Colors.blue500}
            textStyle={styles.iconText}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('retweet')}
            name="twitter-retweet"
            size={24}
            color={Colors.purple500}
            textStyle={styles.iconText}
            text={person.counts.retweet}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('heart')}
            name="heart"
            size={24}
            color={Colors.red500}
            textStyle={styles.iconText}
            text={person.counts.heart}
          />
        </View>
      </View>
    </View>
  )
}

export default Person
