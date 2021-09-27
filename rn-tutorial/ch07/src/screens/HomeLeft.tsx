import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  useNavigation,
  useIsFocused,
  useFocusEffect,
} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  UnderlineText,
  TopBar,
} from '../theme/navigation';
import * as D from '../data';

const HomeLeft = () => {
  const navigation = useNavigation();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [],
  );
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', { id: D.randomId() }),
    [],
  );

  const focused = useIsFocused();
  useEffect(() => console.log('HomeLeft isFocused', focused), [focused]);
  useFocusEffect(() => console.log('useFocusEffect called'));
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={goBack} style={styles.text}>
            go back
          </UnderlineText>
          <UnderlineText
            onPress={goRight}
            style={[styles.text, { marginLeft: 10 }]}>
            go right
          </UnderlineText>
        </TopBar>
        <View style={styles.content}>
          <Text style={styles.text}>HomeLeft</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeLeft;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5 },
  text: { fontSize: 20 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
