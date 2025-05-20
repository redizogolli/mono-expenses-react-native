import { View, Text } from "react-native";
import React from "react";
import HeaderBackground from "@/components/HeaderBackground";

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <HeaderBackground></HeaderBackground>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
