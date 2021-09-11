import React, { useMemo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

const title = 'Fibo'
const Fibo = () => {
  const fibonacci = (n: number): number => {
    if (n === 0) {
      return 0
    } else if (n === 1) {
      return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  const memoizedFibo = useMemo(() => fibonacci, [])

  const fibos = useMemo(
    () =>
      D.makeArray(20 + 1).map((notUsed, idx) => ({
        number: idx,
        fibonacci: memoizedFibo(idx),
      })),
    []
  )

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={fibos}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.number} : {item.fibonacci}
          </Text>
        )}
        keyExtractor={item => item.number.toString()}
      />
    </View>
  )
}

export default Fibo

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
  contentContainerStyle: { alignItems: 'center' },
})
