import React, { useState, useCallback } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableView,
  UnderlineText,
} from '../theme';
import { useAutoFocus, AutoFocusProvider } from '../contexts';
import * as D from '../data';
import type { TabParamList } from './MainNavigator';

type SignUpNavigationProp = BottomTabNavigationProp<TabParamList, 'Login'>;

const SignUp = () => {
  const [person, setPerson] = useState(D.createRandomPerson());
  const [password, setPassword] = useState(D.random(10000, 1000000).toString());
  const [confirmPassword, setConfirmPassword] = useState(
    D.random(10000, 1000000).toString(),
  );
  const focus = useAutoFocus();

  const navigation = useNavigation<SignUpNavigationProp>();
  const goHomeNavigator = useCallback(() => {
    if (password === confirmPassword) {
      navigation.navigate('HomeNavigator');
    } else {
      Alert.alert('password is invalid');
    }
  }, [password, confirmPassword]);
  const goLogin = useCallback(() => navigation.navigate('Login'), []);

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <AutoFocusProvider contentContainerStyle={styles.keyboardAwareFocus}>
          <View style={styles.textView}>
            <Text style={styles.text}>email</Text>
            <View border style={styles.textInputView}>
              <TextInput
                onFocus={focus}
                style={styles.textInput}
                value={person.email}
                onChangeText={(email) =>
                  setPerson((person) => ({ ...person, email }))
                }
                placeholder="enter your email"
              />
            </View>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>password</Text>
            <View border style={styles.textInputView}>
              <TextInput
                secureTextEntry
                onFocus={focus}
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder="enter your password"
              />
            </View>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>password confirm</Text>
            <View border style={styles.textInputView}>
              <TextInput
                secureTextEntry
                onFocus={focus}
                style={styles.textInput}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="enter your password confirm"
              />
            </View>
          </View>
          <TouchableView
            notification
            style={styles.touchableView}
            onPress={goHomeNavigator}>
            <Text style={styles.text}>SignUp</Text>
          </TouchableView>
          <UnderlineText
            style={[styles.text, { marginTop: 15 }]}
            onPress={goLogin}>
            Login
          </UnderlineText>
        </AutoFocusProvider>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: 'space-between', alignItems: 'center' },
  text: { fontSize: 20 },
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: { width: '100%', padding: 5, marginBottom: 10 },
  textInput: { fontSize: 24, padding: 10 },
  textInputView: { marginTop: 5, borderRadius: 10 },
  touchableView: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
