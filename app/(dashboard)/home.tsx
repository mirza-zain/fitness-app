// import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import exercise from '../Components/ExerciseList'

const home = () => {
  // interface Quotes {
  //   _id: number,
  //   sentence: string,
  //   author: string
  // }

  // const [dataa, setData] = useState<Quotes | undefined>()
  // // const urlQuote = 'https://api.gameofthronesquotes.xyz/v1/random'

  // const dataFetch = async () => {
  //   const response = await fetch(urlQuote);
  //   const result = await response.json()
  //   if(!result) {
  //     throw new Error(`Status: 404`)
  //   }
  //   // console.log(result)
  //   setData(result)
  // }

  // useEffect(() => { dataFetch() }, [])

  return (
    <View>
      <Text className='text-2xl text-center font-["Fira"]' style={{marginTop: "20%", padding: "5%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem fugit obcaecati.</Text>
      <Text className='text-center font-semibold' style={{fontSize: 15}}>"Mirza Zain"</Text>
      <View style={{height: "7%"}} />
      <Text className='text-2xl font-semibold p-3'>Continue Training</Text>
      <FlatList 
        data={exercise}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View className='h-screen-safe flex justify-center items-center'>
            <View className='w-3/5 bg-black'>
              <Image source={{ uri: item.image }} style={{width: "50%", height: "20%"}} />
            </View>
            <View className='w-2/5'>
              <Text className='text-xl font-bold'>{item.name}</Text>
              <Text className='text-sm font-medium'>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default home
