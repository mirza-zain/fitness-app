import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { useFocusEffect } from 'expo-router'

interface quoteInterface {
  quote: string,
  author: string
}

const Home = () => {
  const [data, setData] = useState<quoteInterface | null>(null)
  const weeks = useSelector((state: any) => state.exercise.weeks);
  const pendingExercises = weeks
    .flatMap((day: any) => day.items) 
    .filter((item: any) => !item.isCompleted);

  useFocusEffect(
    React.useCallback(() => {
    }, [])
  );

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
        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 400 }}>"{data?.author}"</Text>
        <View style={{ height: 16 }} />
        <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 5, textDecorationLine: 'underline' }}>Continue Training</Text>
      </View>
      
      <FlatList 
        data={pendingExercises}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 12 }}
        renderItem={({item}) => (
          <View className='bg-gray-200 p-4 mb-3 rounded-xl border border-gray-300 shadow-md'>
            <View className="mb-2">
              <Text className="text-lg font-bold text-gray-900">{item.name}</Text>
              <Text className="text-sm text-gray-600">{item.description}</Text>
            </View>
            <View className="flex-row justify-between items-center mt-2">
              <Text className={`font-bold ${item.isCompleted ? "text-green-500" : "text-orange-500"}`}>
                {item.isCompleted ? "Completed" : "Pending"}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>
            All caught up! Great work.
          </Text>
        }
      />
    </SafeAreaView>
  )
}

export default Home
