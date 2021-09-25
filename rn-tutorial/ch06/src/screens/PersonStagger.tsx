/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import moment from 'moment-with-locales-es6';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data';
import { styles } from './Person.style';
import { Avatar } from '../components';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useAnimatedValues, useToggle, useLayout } from '../hooks';
import { interpolate } from '../utils';

moment.locale('ko');

const AnimatedIcon = Animated.createAnimatedComponent(FontawesomeIcon);
const IconSize = 30;
const delay = 1000;

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonStagger: FC<PersonProps> = ({ person, deletePressed }) => {
  const [started, toggleStarted] = useToggle();
  const [layout, setLayout] = useLayout();

  const balls = useMemo(
    () => [Colors.pink500, Colors.lime500, Colors.lightBlue500],
    [],
  );
  const animValues = useAnimatedValues(balls.length);

  const startAnimations = useMemo(
    () =>
      balls
        .map((_, index) =>
          Animated.spring(animValues[index], {
            useNativeDriver: true,
            toValue: 1,
          }),
        )
        .reverse(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const endAnimations = useMemo(
    () =>
      balls.map((_, index) =>
        Animated.spring(animValues[index], {
          useNativeDriver: true,
          toValue: 0,
        }),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const avatarPressed = useCallback(() => {
    Animated.loop(
      Animated.stagger(delay, [...startAnimations, ...endAnimations]),
    ).start(toggleStarted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const icons = useMemo(
    () =>
      balls.map((color, index) => {
        const numberOfIcons = balls.length;
        const animValue = animValues[index];
        const animStyle = {
          transform: [
            {
              translateX: interpolate(animValue, [
                0,
                layout.width - numberOfIcons * IconSize,
              ]),
            },
            { rotate: interpolate(animValue, ['0deg', '720deg']) },
          ],
        };
        return (
          <AnimatedIcon
            key={color}
            style={animStyle}
            name="soccer-ball-o"
            size={IconSize}
            color={color}
          />
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [layout.width],
  );

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
        <View
          onLayout={setLayout}
          style={[styles.countsView, { justifyContent: 'flex-start' }]}>
          {icons}
        </View>
      </View>
    </View>
  );
};

export default PersonStagger;
