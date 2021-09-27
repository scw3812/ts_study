import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, UnderlineText, TopBar } from '../theme/navigation';
import { ScrollEnabledProvider, useScrollEnabled } from '../contexts';
import * as D from '../data';
import Person from './Person';

const Home = () => {
  const navigation = useNavigation();
  const goLeft = useCallback(() => navigation.navigate('HomeLeft'), []);
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', { name: 'Jack', age: 32 }),
    [],
  );

  const [scrollEnabled] = useScrollEnabled();
  const [people, setPeople] = useState<D.IPerson[]>([]);

  const addPerson = useCallback(
    () => setPeople((people) => [D.createRandomPerson(), ...people]),
    [],
  );
  const removeAllPersons = useCallback(() => setPeople((_) => []), []);
  const deletePerson = useCallback(
    (id: string) => () =>
      setPeople((people) => people.filter((person) => person.id !== id)),
    [],
  );

  useEffect(() => D.makeArray(5).forEach(addPerson), []);

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
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
          <FlatList
            scrollEnabled={scrollEnabled}
            data={people}
            renderItem={({ item }) => (
              <Person person={item} deletePressed={deletePerson(item.id)} />
            )}
            keyExtractor={(item) => item.id}
          />
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
