import { FlatList, Text, View } from "react-native"
import weeks from "./DaysList"


const Days = () => {
    return (
        <View className="w-full h-full p-5">
           <FlatList 
                data={weeks}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle= {{ padding: 5 }}
                renderItem={({item}) => (
                    <View>
                        <View className="w-full flex flex-row justify-center">
                            <Text>{item.day}</Text>
                        </View>
                    </View>
                )}
           />
        </View>
    )
}

export default Days