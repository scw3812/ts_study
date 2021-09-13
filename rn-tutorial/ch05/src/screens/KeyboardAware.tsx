import React, { useRef, useState, useCallback, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Keyboard,
  findNodeHandle,
} from 'react-native';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useToggleTheme } from '../contexts';
import * as D from '../data';

const Home = () => {
  const [person, setPerson] = useState(D.createRandomPerson());
  const { dark, colors } = useTheme();
  const toggleTheme = useToggleTheme();

  const textInputRef = useRef<TextInput | null>(null);
  const setFocus = useCallback(
    () => textInputRef.current?.focus(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [textInputRef.current],
  );

  const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null);
  const scrollToInput = (reactNode: any) => {
    scrollViewRef.current?.scrollToFocusedInput(reactNode);
  };
  const autoFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) =>
      scrollToInput(findNodeHandle(event.target)),
    [],
  );
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const textInputStyle = useMemo(
    () => [
      styles.textInput,
      { color: colors.text, borderColor: colors.placeholder },
    ],
    [colors.text, colors.placeholder],
  );

  return (
    <View style={[styles.view, { backgroundColor: colors.surface }]}>
      <View style={[styles.topBar, { backgroundColor: colors.accent }]}>
        <Text style={styles.textButton} onPress={setFocus}>
          focus
        </Text>
        <Text style={styles.textButton} onPress={dismissKeyboard}>
          dismiss keyboard
        </Text>
        <View style={styles.view} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <KeyboardAwareScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.view}>
        <View style={styles.view} />
        <View style={styles.textView}>
          <Text style={[styles.text, { color: colors.text }]}>email</Text>
          <TextInput
            ref={textInputRef}
            style={textInputStyle}
            value={person.email}
            placeholder="enter your email"
            onChangeText={(email) =>
              setPerson((prevPerson) => ({ ...prevPerson, email }))
            }
            onFocus={autoFocus}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: { flex: 1 },
  topBar: { flexDirection: 'row', padding: 5 },
  textButton: { marginLeft: 10, fontSize: 20 },
  keyboardAvoidingView: { flex: 1, padding: 10 },
  textView: { padding: 5 },
  text: { fontSize: 24 },
  textInput: { fontSize: 24, borderWidth: 1, borderRadius: 5 },
});
