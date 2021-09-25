import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import moment from 'moment-with-locales-es6';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data';
import { styles } from './Person.style';
import { Avatar } from '../components';
import { useToggle, useTransformStyle } from '../hooks';
import { interpolate } from '../utils';

moment.locale('ko');

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonSequence: FC<PersonProps> = ({ person, deletePressed }) => {
  const [started, toggleStarted] = useToggle();
  const animValues = useMemo(
    () => [1, 2, 3].map((_) => new Animated.Value(0)),
    [],
  );
  const animations = useMemo(
    () =>
      animValues.map((animValue) =>
        Animated.timing(animValue, {
          useNativeDriver: true,
          toValue: started ? 0 : 1,
          duration: 700,
          easing: Easing.bounce,
        }),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [started],
  );

  const avatarPressed = useCallback(() => {
    Animated.sequence(animations).start(toggleStarted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const leftIconStyle = useTransformStyle({
    translateX: interpolate(animValues[0], started ? [0, -1200] : [-1200, 0]),
  });
  const centerIconStyle = useTransformStyle({
    translateY: interpolate(animValues[1], started ? [0, 1200] : [1200, 0]),
  });
  const rightIconStyle = useTransformStyle({
    translateX: interpolate(animValues[2], started ? [0, 1200] : [1200, 0]),
  });

  return (
    <View style={styles.view}>
      <View style={styles.leftView}>
        <Avatar
          imageStyle={styles.avatar}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={styles.text}>Press Me</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.email}>{person.email}</Text>
        <View style={styles.dateView}>
          <Text style={styles.text}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          style={[styles.text, styles.comments]}
          numberOfLines={3}
          ellipsizeMode="tail">
          {person.comments}
        </Text>
        <Image source={{ uri: person.image }} style={styles.image} />
        <View style={styles.countsView}>
          <AnimatedIcon
            style={leftIconStyle}
            name="comment"
            size={24}
            color={Colors.blue500}
          />
          <AnimatedIcon
            style={centerIconStyle}
            name="twitter-retweet"
            size={24}
            color={Colors.purple500}
          />
          <AnimatedIcon
            style={rightIconStyle}
            name="heart"
            size={24}
            color={Colors.red500}
          />
        </View>
      </View>
    </View>
  );
};

export default PersonSequence;
