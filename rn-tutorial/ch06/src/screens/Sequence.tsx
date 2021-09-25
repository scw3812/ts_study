import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useToggleTheme } from '../contexts';
import * as D from '../data';
import Person from './Person';

const Sequence = () => {
  const [people, setPeople] = useState([D.createRandomPerson()]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const add = useCallback(
    () => setPeople((prevPeople) => [D.createRandomPerson(), ...prevPeople]),
    [],
  );
  const removeAll = useCallback(() => setPeople((_) => []), []);
  const deletePerson = useCallback(
    (id: string) => () =>
      setPeople((prevPeople) =>
        prevPeople.filter((person) => person.id !== id),
      ),
    [],
  );

  useEffect(add, [add]);

  return (
    <View style={[styles.view, { backgroundColor: theme.colors.surface }]}>
      <View style={[styles.topBar, { backgroundColor: theme.colors.accent }]}>
        <Text onPress={add} style={styles.text}>
          add
        </Text>
        <Text onPress={removeAll} style={styles.text}>
          remove all
        </Text>
        <View style={styles.view} />
        <Switch value={theme.dark} onValueChange={toggleTheme} />
      </View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Person person={item} deletePressed={deletePerson(item.id)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Sequence;

const styles = StyleSheet.create({
  view: { flex: 1 },
  topBar: { flexDirection: 'row', padding: 5 },
  text: { marginRight: 10, fontSize: 20 },
});
