// import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

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
    <View className="w-full h-full flex flex-1">
      <Text className='text-2xl font-bold text-center font-["Fira"]' style={{marginTop: "20%", fontWeight: 'bold', padding: "5%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem fugit obcaecati.</Text>
      <Text className='text-center font-semibold' style={{fontSize: 15}}>"Mirza Zain"</Text>
    </View>
  )
}

export default home
