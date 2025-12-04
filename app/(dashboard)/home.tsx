import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import exercise from '../Components/ExerciseList'

interface quoteInterface {
  quote: string,
  author: string
}

const Home = () => {
  const [data, setData] = useState<quoteInterface | null>(null)

  const quoteData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random')
      const result = await response.json()
      setData(result)
    } catch (err) {
      throw new Error (`Error Status: ${err}`)
    } 
  }

  useEffect(() => { quoteData() }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 12 }}>
        <Text style={{padding: 2 ,fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 8, fontWeight: 500 }}>
          {data?.quote || 'Loading...'}
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 400 }}>&quot;{data?.author}&quot;</Text>
        <View style={{ height: 16 }} />
        <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 8 }}>Continue Training</Text>
      </View>
      
      <FlatList 
        data={exercise}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingVertical: 12 }}
        renderItem={({item}) => (
          <View style={{ flexDirection: 'row', padding: 12, marginHorizontal: 12, marginVertical: 6, backgroundColor: '#fff', borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
            <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 8 }} />
            <View style={{ flex: 1, paddingLeft: 12, justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home
