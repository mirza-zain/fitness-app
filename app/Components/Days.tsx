import { FlatList, ScrollView, Text, View } from "react-native"


const Days = () => {
    const weeks = [
        {
            id: 1,
            day: "Mon",
            items: [
                {
                    id: 1,
                    name: "Push Ups",
                    description: "exercise pushups",
                    image: "path",
                    isCompleted: false
                },
            ],
        },
        {
            id: 2,
            day: "Tues",
            items: [
                {
                    id: 1,
                    name: "Squats",
                    description: "exercise squats",
                    image: "path",
                    isCompleted: false
                },
            ],
        },
        {
            id: 3,
            day: "Wed",
            items: []
        },
                {
            id: 4,
            day: "Thurs",
            items: []
        },
                {
            id: 5,
            day: "Fri",
            items: []
        },
                {
            id: 6,
            day: "Sat",
            items: []
        },
                {
            id: 7,
            day: "Sun",
            items: []
        },
    ]

    return (
        <View className="w-full h-full p-5">
            <Text className="text-2xl font-bold">Start Working Out!!!!</Text>
            <View className="w-full flex flex-row">
                {/* {
                    weeks.map((items, index) => (
                        
                    ))
                } */}
            </View>
        </View>
    )
}

export default Days