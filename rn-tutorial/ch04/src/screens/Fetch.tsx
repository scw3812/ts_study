import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Colors } from 'react-native-paper'
import Country from './Country'
import * as D from '../data'
import { useAsync } from '../hooks'

const Fetch = () => {
  const [countries, setCountries] = useState<D.ICountry[]>([])
  const [error, resetError] = useAsync(async () => {
    setCountries([])
    resetError()
	// await Promise.reject(new Error('error test'))
    const countries = await D.getCountries()
    setCountries(countries)
  }, [])

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Fetch</Text>
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={countries}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Country country={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  )
}

export default Fetch

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: Colors.blue100 },
  title: { fontSize: 30, fontWeight: '600' },
  seperator: { borderBottomColor: Colors.blue50, borderBottomWidth: 1 },
})
