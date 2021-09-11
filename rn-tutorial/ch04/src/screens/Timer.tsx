import React, { useEffect, useCallback, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native'
import { Colors } from 'react-native-paper'

const Timer = () => {
  const [loading, setLoading] = useState(true)
  const toggleLoading = useCallback(() => setLoading(flag => !flag), [])
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(id)
  }, [loading])

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'} />
      {loading && <ActivityIndicator size="large" color={Colors.deepPurple700} />}
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: Colors.yellow300 },
  text: { fontSize: 30, fontWeight: '600' },
})
