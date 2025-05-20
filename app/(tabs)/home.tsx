import { View, Text } from "react-native";
import React from "react";
import HeaderBackground from "@/components/HeaderBackground";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <HeaderBackground>
        <View className="flex-1 flex-row justify-between px-4 pt-16">
          <View>
            <Text className="text-white text-sm">Good afternoon,</Text>
            <Text className="font-bold text-white text-xl">
              Enjelin Morgeana
            </Text>
          </View>
          <View className="w-12 h-12 bg-white/6 rounded-lg flex items-center justify-center">
            <Ionicons
              className="relative"
              name="notifications-outline"
              size={24}
              color="white"
            />
            <Ionicons
              name="ellipse"
              size={10}
              color="orange"
              className="absolute top-3 right-3"
            />
          </View>
        </View>
      </HeaderBackground>
      <View className="flex-1 px-5">
        <View className="w-full h-52 bg-info -mt-32 rounded-3xl px-5 py-6">
          <View className="flex-1 justify-between items-start flex-row">
            <View className="flex-1 gap-2">
              <View className="flex-row items-center gap-1">
                <Text className="font-semibold text-white">Total Balance</Text>
                <EvilIcons name="chevron-up" size={18} color="white" />
              </View>
              <Text className="text-white font-bold text-3xl">$ 2,548.00</Text>
            </View>
            <View className="flex items-center">
              <Octicons name="kebab-horizontal" size={21} color="white" />
            </View>
          </View>
          <View className="flex-1 flex-row justify-between items-end">
            <View className="flex-1">
              <View className="flex-row items-center gap-1">
                <View className="bg-white/15 rounded-full w-6 h-6 items-center justify-center">
                  <FontAwesome6
                    name="arrow-down"
                    size={14}
                    color="white"
                  />
                </View>
                <Text className="text-white">Income</Text>
              </View>
              <Text className="text-white font-semibold text-xl">
                $ 1,840.00
              </Text>
            </View>
            <View className="flex-1 justify-between items-end">
              <View className="flex-row items-center gap-1">
                <View className="bg-white/15 rounded-full w-6 h-6 items-center justify-center">
                  <FontAwesome6
                    name="arrow-up"
                    size={14}
                    color="white"
                  />
                </View>
                <Text className="text-lighter-gray text-lg">Expenses</Text>
              </View>
              <Text className="text-white font-semibold text-xl">
                $ 284.00
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
