import React, { useCallback } from 'react'
import type { FC, Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import { Colors } from 'react-native-paper'
import { IconText } from '../components'
import { styles } from './Person.style'
import * as D from '../data'

interface PersonIconsProps {
  person: D.IPerson
  setNewPerson: Dispatch<SetStateAction<D.IPerson>>
}

const PersonIcons: FC<PersonIconsProps> = ({ person, setNewPerson }) => {
  const commentPressed = useCallback(
    () =>
      setNewPerson(p => ({
        ...p,
        counts: {
          ...p.counts,
          comment: p.counts.comment + 1,
        },
      })),
    [setNewPerson],
  )
  const retweetPressed = useCallback(
    () =>
      setNewPerson(p => ({
        ...p,
        counts: {
          ...p.counts,
          retweet: p.counts.retweet + 1,
        },
      })),
    [setNewPerson],
  )
  const heartPressed = useCallback(
    () =>
      setNewPerson(p => ({
        ...p,
        counts: {
          ...p.counts,
          heart: p.counts.heart + 1,
        },
      })),
    [setNewPerson],
  )

  return (
    <View style={styles.countsView}>
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={commentPressed}
        name="comment"
        size={24}
        color={Colors.blue500}
        textStyle={styles.iconText}
        text={person.counts.comment}
      />
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={retweetPressed}
        name="twitter-retweet"
        size={24}
        color={Colors.purple500}
        textStyle={styles.iconText}
        text={person.counts.retweet}
      />
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={heartPressed}
        name="heart"
        size={24}
        color={Colors.red500}
        textStyle={styles.iconText}
        text={person.counts.heart}
      />
    </View>
  )
}

export default PersonIcons
