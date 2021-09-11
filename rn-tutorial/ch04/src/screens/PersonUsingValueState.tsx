import React, { useCallback, useState } from 'react'
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

const PersonUsingValueState: FC<PersonProps> = ({ person }) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar'), [])
  const deletePressed = useCallback(() => Alert.alert('delete'), [])

  const [comment, setComment] = useState(person.counts.comment)
  const [retweet, setRetweet] = useState(person.counts.retweet)
  const [heart, setHeart] = useState(person.counts.heart)

  const commentPressed = useCallback(() => setComment(c => c + 1), [])
  const retweetPressed = useCallback(() => setRetweet(r => r + 1), [])
  const heartPressed = useCallback(() => setHeart(h => h + 1), [])

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
            onPress={commentPressed}
            name="comment"
            size={24}
            color={Colors.blue500}
            textStyle={styles.iconText}
            text={comment}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={retweetPressed}
            name="twitter-retweet"
            size={24}
            color={Colors.purple500}
            textStyle={styles.iconText}
            text={retweet}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={heartPressed}
            name="heart"
            size={24}
            color={Colors.red500}
            textStyle={styles.iconText}
            text={heart}
          />
        </View>
      </View>
    </View>
  )
}

export default PersonUsingValueState
