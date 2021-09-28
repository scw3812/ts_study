import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  SafeAreaView,
  View,
  Text,
  NavigationHeader,
  MaterialCommunityIcon as Icon,
} from '../theme';
import { LeftRightNavigation } from '../components';
import type { StackParamList } from './MainNavigator';

type HomeLeftNavigationProp = StackNavigationProp<StackParamList, 'HomeLeft'>;

const HomeLeft = () => {
  const navigation = useNavigation<HomeLeftNavigationProp>();
  const goHome = useCallback(() => navigation.navigate('Home'), []);

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          Right={() => <Icon name="close" size={30} onPress={goHome} />}
        />
        <LeftRightNavigation distance={40} onRightToLeft={goHome}>
          <View style={styles.content}>
            <Text style={styles.text}>HomeLeft</Text>
          </View>
        </LeftRightNavigation>
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
