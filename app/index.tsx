import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="w-full h-full flex p-3 m-0 bg-gray-300" >
        <Image source={require('../assets/images/hero.png')} style={{width: '100%', height: '60%', margin: 0}} placeholder="hero" />
        <Text className="text-7xl mt-1 font-['Fira'] text-gray-800 text-center">FIND YOUR{'\n'}STRENGTH</Text>
        <TouchableOpacity className="px-2 py-4 bg-blue-500 mx-10 my-2 rounded-lg">
          <Text className="text-center text-2xl font-semibold">Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50
  }
})