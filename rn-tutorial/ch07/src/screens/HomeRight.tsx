import React, { useCallback } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  TopBar,
  NavigationHeader,
  MaterialCommunityIcon as Icon,
} from '../theme';
import { LeftRightNavigation } from '../components';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { StackParamList } from './MainNavigator';

type HomeRightNavigationProp = StackNavigationProp<StackParamList, 'HomeRight'>;

const HomeRight = () => {
  const navigation = useNavigation<HomeRightNavigationProp>();
  const route = useRoute();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [],
  );
  const goHome = useCallback(() => navigation.navigate('Home'), []);

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          title="HomeRight"
          Left={() => (
            <Icon name="arrow-left-bold" size={50} onPress={goBack} />
          )}
          Right={() => (
            <Icon
              name="shield-airplane"
              size={30}
              onPress={() => Alert.alert('menu pressed')}
            />
          )}
        />
        <TopBar>
          <Text onPress={goBack} style={styles.text}>
            go back
          </Text>
          <Text onPress={goHome} style={[styles.text, { marginLeft: 10 }]}>
            go home
          </Text>
        </TopBar>
        <LeftRightNavigation distance={40} onLeftToRight={goHome}>
          <View style={styles.content}>
            <Text style={styles.text}>HomeRight</Text>
            <Text style={styles.text}>{JSON.stringify(route, null, 2)}</Text>
          </View>
        </LeftRightNavigation>
      </View>
    </SafeAreaView>
  );
};

export default HomeRight;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5 },
  text: { fontSize: 20 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
