import { Text } from "react-native";
import { Image } from "expo-image"
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="w-full h-full p-3 m-0 bg-gray-300" >
        <Image source={require('../assets/images/hero.png')} style={{width: '100%', height: '60%', margin: 0}} placeholder="hero" />
        <Text className="text-7xl mt-1 font-['Fira'] text-gray-900 text-center">FIND YOUR{'\n'}STRENGTH</Text>
        <Link href={'./home'} className="px-2 py-4 bg-blue-500 mx-28 my-5 rounded-lg text-center text-2xl font-semibold">
          Get Started
        </Link>
    </SafeAreaView>
  );
}