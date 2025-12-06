import React from 'react'
import { View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import Days from '../Components/Days'
import ExerciseDetail from '../Components/ExerciseDetail'

const Exercise = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className='w-full h-full'>
      {id ? <ExerciseDetail /> : <Days />}
    </View>
  )
}

export default Exercise
