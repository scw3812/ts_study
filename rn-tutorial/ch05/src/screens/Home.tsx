import React, { useRef, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Switch, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useToggleTheme } from '../contexts';
import * as D from '../data';
import Person from './Person';

const Home = () => {
  const [people, setPeople] = useState([D.createRandomPerson()]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const add = useCallback(
    () => setPeople((prevPeople) => [...prevPeople, D.createRandomPerson()]),
    [],
  );
  const removeAll = useCallback(() => setPeople((_) => []), []);

  const flatListRef = useRef<FlatList | null>(null);
  const onContenSizeChange = useCallback(
    () => flatListRef.current?.scrollToEnd(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [flatListRef.current],
  );

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
        ref={flatListRef}
        onContentSizeChange={onContenSizeChange}
        data={people}
        renderItem={({ item }) => <Person person={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: { flex: 1 },
  topBar: { flexDirection: 'row', padding: 5 },
  text: { marginRight: 10, fontSize: 20 },
});
