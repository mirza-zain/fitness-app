import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Modal, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { addExercise } from "../slice/ExerciseSlice";

const Days = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const weeks = useSelector((state: any) => state.exercise.weeks);
  const [activeDay, setActiveDay] = useState("Mon");
  
  const [modalVisible, setModalVisible] = useState(false);
  const [newExerciseName, setNewExerciseName] = useState("");
  const [newExerciseDesc, setNewExerciseDesc] = useState("");

  const selectedDay = weeks.find((w: any) => w.day === activeDay);

  const handleAddExercise = () => {
    if (!newExerciseName.trim()) {
      Alert.alert("Error", "Please enter an exercise name");
      return;
    }

    const newExercise = {
      id: String(Date.now()),
      name: newExerciseName,
      description: newExerciseDesc,
      isCompleted: false,
      image: require('../../assets/images/hero.png')
    };

    dispatch(addExercise({ day: activeDay, exercise: newExercise }));
    setNewExerciseName("");
    setNewExerciseDesc("");
    setModalVisible(false);
  };

  return (
    <View className="flex-1 p-5 bg-gray-100 relative"> 

      <View className="mb-6">
        <Text className="text-3xl font-bold text-gray-900">Workout Schedule</Text>
      </View>

      <View className="mb-6">
        <FlatList
          data={weeks}
          extraData={weeks} 
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-3"
          renderItem={({ item }) => {
            const isActive = item.day === activeDay;
            return (
              <TouchableOpacity
                onPress={() => setActiveDay(item.day)}
                className={`px-4 py-4 rounded-lg border ${
                  isActive
                    ? "bg-blue-600 border-blue-600"
                    : "bg-gray-300 border-gray-300"
                }`}
              >
                <Text className={`text-base font-bold ${isActive ? "text-white" : "text-black"}`}>
                  {item.day}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View className="flex-1 pb-20"> 
        <Text className="text-xl font-bold mb-3 text-gray-800">
          {activeDay}'s Routine
        </Text>

        <FlatList
          data={selectedDay?.items || []}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={
            <Text className="text-gray-500 italic mt-4 text-center">
              No exercises yet.
            </Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity 
              className="bg-gray-200 p-4 mb-3 rounded-xl border border-gray-200 shadow-sm"
              onPress={() => router.push(`/(dashboard)/exercise?id=${item.id}`)}
            >
              <View className="mb-2">
                <Text className="text-lg font-bold text-gray-900">{item.name}</Text>
                <Text className="text-sm text-gray-600">{item.description}</Text>
              </View>
              <View className="flex-row justify-between items-center mt-2">
                <Text className={`font-bold ${item.isCompleted ? "text-green-600" : "text-orange-500"}`}>
                  {item.isCompleted ? "Completed" : "Pending"}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity 
        onPress={() => setModalVisible(true)}
        className="absolute bottom-6 right-6 w-16 h-16 bg-blue-600 rounded-full items-center justify-center shadow-lg z-50"
      >
        <Text className="text-white text-4xl leading-none pb-1">+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white w-4/5 p-6 rounded-2xl shadow-xl">
            <Text className="text-xl font-bold mb-4 text-center">Add New Exercise</Text>
            
            <Text className="text-gray-500 mb-1">Target Day: {activeDay}</Text>
            
            <TextInput
              placeholder="Exercise Name"
              className="border border-gray-300 rounded-lg p-3 mb-3 text-lg"
              value={newExerciseName}
              onChangeText={setNewExerciseName}
            />
            
            <TextInput
              placeholder="Description"
              className="border border-gray-300 rounded-lg p-3 mb-6 text-lg"
              value={newExerciseDesc}
              onChangeText={setNewExerciseDesc}
            />

            <View className="flex-row justify-between">
              <TouchableOpacity onPress={() => setModalVisible(false)} className="bg-gray-400 px-6 py-3 rounded-lg flex-1 mr-2">
                <Text className="text-white text-center font-bold">Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleAddExercise} className="bg-blue-600 px-6 py-3 rounded-lg flex-1 ml-2">
                <Text className="text-white text-center font-bold">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Days;