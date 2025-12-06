import { Text } from "react-native";
import { Image } from "expo-image"
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="w-full h-full p-3 m-0 bg-gray-300" >
        <Image source={require('../assets/images/hero.png')} style={{width: '100%', height: '60%', margin: 0}} placeholder="hero" />
        <Text className="text-7xl mt-1 text-gray-900 text-center" style={{ fontFamily: 'Fira' }}>
          FIND YOUR{'\n'}STRENGTH
        </Text>
        <Link href={'./home'} className="text-white px-2 py-4 bg-blue-600 mx-28 my-5 rounded-xl text-center text-2xl font-semibold">
          Get Started
        </Link>
        <Text className="text-base text-center mt-20">Made with ❤ by Mirza Zain</Text>
    </SafeAreaView>
  );
}