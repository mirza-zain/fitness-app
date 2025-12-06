import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from '../slice/ExerciseSlice';

export default function ExerciseDetail() {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const exercise = useSelector((state: any) => {
    for (const day of state.exercise.weeks) {
      const found = day.items.find((item: any) => item.id == id);
      if (found) return found;
    }
    return null;
  });

  if (!exercise) return <Text className="p-5 text-lg">Exercise not found</Text>;

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="bg-white overflow-hidden">
        {exercise.image && (
          <Image 
            source={exercise.image} 
            className="w-full h-56"
            resizeMode="contain"
            style={{ backgroundColor: "#f3f4f6" }}
          />
        )}
      </View>

      <View className="p-5">
        <Text className="text-4xl font-bold text-gray-900 mb-2">{exercise.name}</Text>
        
        <View className="mb-4">
          <Text className={`text-lg font-semibold ${exercise.isCompleted ? 'text-green-600' : 'text-orange-500'}`}>
            Status: {exercise.isCompleted ? 'Completed' : 'Pending'}
          </Text>
        </View>

        <View className="bg-white p-4 rounded-xl mb-6">
          <Text className="text-base text-gray-700 leading-6">
            {exercise.description}
          </Text>
        </View>

        <TouchableOpacity 
          className={`p-4 rounded-xl ${exercise.isCompleted ? 'bg-orange-500' : 'bg-green-600'}`}
          onPress={() => dispatch(toggleStatus(id))}
        >
          <Text className="text-white text-center text-lg font-semibold">
            {exercise.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="mt-4 p-4 rounded-xl bg-gray-300"
          onPress={() => router.push('/(dashboard)/exercise')}
        >
          <Text className="text-gray-800 text-center text-lg font-semibold">
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}