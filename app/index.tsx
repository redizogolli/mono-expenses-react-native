import OnboardingMan from "@/components/OnboardingMan";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from "expo-router";
// import * as SplashScreen from 'expo-splash-screen';//TODO: SplashScreen

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
// SplashScreen.setOptions({
//   duration: 10000,
//   fade: true,
// });

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="flex-1 w-full">
        <OnboardingMan />
      </View>
      <View className="w-full bg-white flex gap-9 py-10 px-5">
        <View className="flex justify-center items-center">
          <Text className="font-bold text-3xl text-primary-text">Spend Smarter</Text>
          <Text className="font-bold text-3xl text-primary-text">Save More</Text>
        </View>
        <TouchableOpacity onPress={() => router.navigate('/home')}>
          <LinearGradient colors={['#69AEA9', '#3F8782']} className="w-full h-16 flex justify-center items-center" style={{ borderRadius: 9999 }}>
            <Text className="font-bold text-white text-lg">Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View className="flex-row justify-center items-center gap-2">
          <Text>Already have account?</Text>
          <Link className="text-primary-text" href={{ pathname: '/auth/login' }}>Log In</Link>
        </View>
      </View>
      <StatusBar hidden={true}/>
    </SafeAreaView>
  );
}
