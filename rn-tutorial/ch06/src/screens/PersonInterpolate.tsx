import React, { useCallback } from 'react';
import type { FC } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import moment from 'moment-with-locales-es6';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data';
import { styles } from './Person.style';
import { Avatar } from '../components';
import { Text as ThemeText, View as ThemeView } from '../theme/paper';
import { interpolate } from '../utils';
import {
  useToggle,
  useAnimatedValue,
  useMonitorAnimatedValue,
  useStyle,
} from '../hooks';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonInterpolate: FC<PersonProps> = ({ person, deletePressed }) => {
  const animValue = useAnimatedValue(0);
  const realAnimValue = useMonitorAnimatedValue(animValue);
  const [started, toggleStarted] = useToggle(false);

  const rightViewAnimStyle = useStyle({ opacity: animValue }, []);
  const avatarPressed = useCallback(
    () =>
      Animated.timing(animValue, {
        useNativeDriver: false,
        toValue: started ? 0 : 1,
        duration: 1000,
        easing: Easing.ease,
      }).start(toggleStarted),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [started],
  );

  const textAnimStyle = useStyle({
    fontSize: interpolate(animValue, [10, 30], [0, 1]),
    color: interpolate(
      animValue,
      [Colors.lightBlue900, Colors.lime500, Colors.pink500],
      [0, 0.7, 1],
    ),
  });

  return (
    <ThemeView>
      <ThemeText style={styles.text}>realAnimValue: {realAnimValue}</ThemeText>
      <ThemeText style={styles.text}>
        animationEnd: {started ? 'true' : 'false'}
      </ThemeText>
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
        <Animated.View style={[styles.rightView, rightViewAnimStyle]}>
          <Animated.Text style={[styles.name, textAnimStyle]}>
            {person.name}
          </Animated.Text>
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
            <Icon name="comment" size={24} color={Colors.blue500} />
            <Icon name="twitter-retweet" size={24} color={Colors.purple500} />
            <Icon name="heart" size={24} color={Colors.red500} />
          </View>
        </Animated.View>
      </View>
    </ThemeView>
  );
};

export default PersonInterpolate;
