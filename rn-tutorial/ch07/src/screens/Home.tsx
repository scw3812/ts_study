import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  View,
  UnderlineText,
  TopBar,
  NavigationHeader,
  MaterialCommunityIcon as Icon,
} from '../theme';
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts';
import * as D from '../data';
import Person from './Person';
import { LeftRightNavigation } from '../components';
import type { LeftRightNavigationMethods } from '../components';
import type { StackParamList } from './HomeNavigator';
import type { TabParamList } from './MainNavigator';

type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamList, 'Home'>,
  BottomTabNavigationProp<TabParamList>
>;

const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const goLeft = useCallback(() => navigation.navigate('HomeLeft'), []);
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', { name: 'Jack', age: 32 }),
    [],
  );
  const logout = useCallback(() => navigation.navigate('Login'), []);

  const [scrollEnabled] = useScrollEnabled();
  const [people, setPeople] = useState<D.IPerson[]>([]);

  const leftRef = useRef<LeftRightNavigationMethods | null>(null);
  const addPerson = useCallback(
    () => setPeople((people) => [D.createRandomPerson(), ...people]),
    [],
  );
  const removeAllPersons = useCallback(() => {
    setPeople((_) => []);
    leftRef.current?.resetOffset();
  }, []);
  const deletePerson = useCallback(
    (id: string) => () => {
      setPeople((people) => people.filter((person) => person.id !== id));
      leftRef.current?.resetOffset();
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    },
    [],
  );

  useEffect(() => D.makeArray(5).forEach(addPerson), []);

  const flatListRef = useRef<FlatList | null>(null);

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <NavigationHeader
            title="Home"
            Right={() => <Icon name="logout" size={30} onPress={logout} />}
          />
          <TopBar>
            <UnderlineText onPress={goLeft} style={styles.text}>
              go left
            </UnderlineText>
            <UnderlineText onPress={goRight} style={styles.text}>
              go right
            </UnderlineText>
          </TopBar>
          <TopBar>
            <UnderlineText onPress={addPerson} style={styles.text}>
              add
            </UnderlineText>
            <UnderlineText onPress={removeAllPersons} style={styles.text}>
              remove all
            </UnderlineText>
          </TopBar>
          <LeftRightNavigation
            ref={leftRef}
            distance={40}
            flatListRef={flatListRef}
            onLeftToRight={goLeft}
            onRightToLeft={goRight}>
            <FlatList
              ref={flatListRef}
              scrollEnabled={scrollEnabled}
              data={people}
              renderItem={({ item }) => (
                <Person person={item} deletePressed={deletePerson(item.id)} />
              )}
              keyExtractor={(item) => item.id}
            />
          </LeftRightNavigation>
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: { flex: 1 },
  text: { marginRight: 10, fontSize: 20 },
});
