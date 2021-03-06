import React, { useCallback, useMemo, useEffect } from 'react';
import type { FC } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import moment from 'moment-with-locales-es6';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data';
import { styles } from './Person.style';
import { Avatar } from '../components';
import {
  useToggle,
  useTransformStyle,
  useAnimatedValues,
  useAnimatedValue,
  useStyle,
} from '../hooks';
import { interpolate } from '../utils';

moment.locale('ko');

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonParallel: FC<PersonProps> = ({ person, deletePressed }) => {
  const [started, toggleStarted] = useToggle();

  const opacityAnimValue = useAnimatedValue();
  const leftToRightAnimValue = useAnimatedValue();
  const topBottomAnimValue = useAnimatedValue();
  const iconAnimValues = useAnimatedValues(3);

  const iconAnimations = useMemo(
    () =>
      iconAnimValues.map((animValue) =>
        Animated.spring(animValue, {
          useNativeDriver: true,
          toValue: started ? 0 : 1,
        }),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [started],
  );

  const enterAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(leftToRightAnimValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce,
      }),
      Animated.spring(opacityAnimValue, { useNativeDriver: true, toValue: 1 }),
      Animated.timing(topBottomAnimValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
        easing: Easing.circle,
      }),
      ...iconAnimations,
    ]).start(toggleStarted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const exitAnimation = useCallback(() => {
    Animated.sequence([
      ...iconAnimations,
      Animated.parallel([
        Animated.spring(topBottomAnimValue, {
          useNativeDriver: true,
          toValue: 0,
        }),
        Animated.spring(opacityAnimValue, {
          useNativeDriver: true,
          toValue: 0,
        }),
      ]),
      Animated.timing(leftToRightAnimValue, {
        useNativeDriver: true,
        toValue: 0,
        duration: 300,
      }),
    ]).start(deletePressed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(enterAnimation, []);

  const enterLeaveTransformStyle = useTransformStyle(
    {
      translateX: interpolate(
        leftToRightAnimValue,
        started ? [400, 0] : [-400, 0],
      ),
    },
    [started],
  );
  const fadeInOutStyle = useStyle({
    opacity: opacityAnimValue,
  });
  const topBottomTransformStyle = useTransformStyle(
    {
      translateY: interpolate(
        topBottomAnimValue,
        started ? [400, 0] : [-400, 0],
      ),
    },
    [started],
  );

  const leftIconStyle = useTransformStyle({
    translateX: interpolate(
      iconAnimValues[0],
      started ? [0, -1200] : [-1200, 0],
    ),
  });
  const centerIconStyle = useTransformStyle({
    translateY: interpolate(iconAnimValues[1], started ? [0, 1200] : [1200, 0]),
  });
  const rightIconStyle = useTransformStyle({
    translateX: interpolate(iconAnimValues[2], started ? [0, 1200] : [1200, 0]),
  });

  return (
    <Animated.View style={[styles.view, enterLeaveTransformStyle]}>
      <Animated.View style={[styles.leftView, fadeInOutStyle]}>
        <Avatar imageStyle={styles.avatar} uri={person.avatar} size={50} />
      </Animated.View>
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
            onPress={exitAnimation}
          />
        </View>
        <Text
          style={[styles.text, styles.comments]}
          numberOfLines={3}
          ellipsizeMode="tail">
          {person.comments}
        </Text>
        <Animated.Image
          source={{ uri: person.image }}
          style={[styles.image, fadeInOutStyle, topBottomTransformStyle]}
        />
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
    </Animated.View>
  );
};

export default PersonParallel;
