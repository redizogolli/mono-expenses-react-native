import { View, Image, Text, TextInput,TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link,useRouter } from "expo-router";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 w-full justify-center items-center bg-white">
      {/* Logo */}
      <View className="mt-4 items-center">
        <Image source={require("../../assets/images/logo.png")} className="" />
        <Text className="color-slate-500 font-bold text-lg">
          Mono <Text className="color-primary-text">Expenses</Text>
        </Text>
      </View>
      <Text className="color-primary-text text-2xl mt-8">
        Sign in to your account
      </Text>
      <View className="p-6 w-full gap-2">
        <View className="w-full gap-2">
          <Text className="color-primary-text">Email Address</Text>
          <View className="border-2 rounded-lg border-gray-300">
            <TextInput
              placeholder="Enter your email address"
              className="h-12"
            />
          </View>
        </View>
        <View className="w-full gap-2">
          <Text className="color-primary-text">Password</Text>
          <View className="flex-row justify-between items-center border-2 rounded-lg border-gray-300">
            <TextInput placeholder="Enter your password" className="h-12" secureTextEntry={!showPassword} />
            {/* Hide show password icon */}
            <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#d1d5db" className="mr-2"/>
            </TouchableWithoutFeedback>
          </View>
        </View>
        {/* Forgot password */}
        <Link href={{ pathname: "/auth/forgot-password" }}>
          <Text className="text-right color-primary-text">
            {" "}
            Forgot password?
          </Text>
        </Link>
        {/* Agree terms and conditions */}
        <View className="flex flex-row items-center gap-4">
          <Checkbox
            className="h-4 w-4"
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#438883" : undefined}
            style={{ borderRadius: 9999 }}
          />
          <Text className="color-slate-500 text-md">
            I’ve read and agreed to{" "}
            <Link
              href={{ pathname: "/auth/forgot-password" }}
              className="color-primary-text"
            >
              User Agreement
            </Link>
            {"\n"}and{" "}
            <Link
              href={{ pathname: "/auth/forgot-password" }}
              className="color-primary-text"
            >
              Privacy Policy
            </Link>
          </Text>
        </View>
        {/* Sign In */}
        <TouchableOpacity onPress={() => router.navigate("/home")} className="mt-4">
          <LinearGradient
            colors={["#69AEA9", "#3F8782"]}
            className="w-full h-16 flex justify-center items-center"
            style={{ borderRadius: 9999 }}
          >
            <Text className="font-bold text-white text-lg">Sign in</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text className="text-center text-sm text-slate-500">other ways to sign in</Text>
        <View className="flex-row justify-center items-center gap-2 mt-4">
          <TouchableHighlight onPress={() => router.navigate("/home")} className="w-12 h-12 justify-center items-center border-gray-300 border-2 rounded-full">
            <Image
              source={require("../../assets/images/google-icon.png")}
              className="w-6 h-6"
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => router.navigate("/home")} className="w-12 h-12 justify-center items-center border-gray-300 border-2 rounded-full">
            <Image
              source={require("../../assets/images/fb-icon.png")}
            />
          </TouchableHighlight>
        </View>
        <View className="flex-row justify-center items-center gap-2 mt-4">
          <Text className="text-slate-500">Don't have an account?</Text>
          <Link href={{ pathname: "/auth/register" }} className="color-primary-text">
            <Text>Create Account</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
