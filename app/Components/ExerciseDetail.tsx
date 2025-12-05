import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

const ExerciseDetail = ({ route } : { route : any }) => {
  const { item } = route.params;
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  const handleToggle = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    item.isCompleted = newStatus; // Updates reference

    if (newStatus) {
      Alert.alert("Good job!", "Exercise completed.");
    }
  };

  return (
    <View className="flex-1 bg-white p-5">
      
      <ScrollView contentContainerClassName="pb-5">
        {/* Title */}
        <Text className="text-3xl font-bold text-gray-900 mb-1">
          {item.name}
        </Text>

        {/* Status Text */}
        <Text className={`text-base font-semibold mb-6 ${isCompleted ? "text-green-600" : "text-orange-500"}`}>
          Status: {isCompleted ? "Completed" : "Pending"}
        </Text>

        {/* Divider Line */}
        <View className="h-[1px] bg-gray-200 mb-6" />

        {/* Description Section */}
        <Text className="text-xl font-bold text-gray-800 mb-2">
          Instructions:
        </Text>
        <Text className="text-base text-gray-600 leading-7">
          {item.description || "No description provided."}
        </Text>
      </ScrollView>

      {/* Main Action Button */}
      <TouchableOpacity 
        onPress={handleToggle}
        className={`p-4 rounded-xl items-center mb-5 ${isCompleted ? "bg-gray-400" : "bg-blue-600"}`}
      >
        <Text className="text-white text-lg font-bold">
          {isCompleted ? "Mark as Pending" : "Mark as Completed"}
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default ExerciseDetail;