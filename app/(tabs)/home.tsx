import { View, Text, Image } from "react-native";
import React from "react";
import HeaderBackground from "@/components/HeaderBackground";
import Ionicons from "@expo/vector-icons/Ionicons";
import BalanceInfo from "@/components/BalanceInfo";
import TransactionItem from "@/components/TransactionItem";

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
      <View className="w-full px-5 -mt-32 h-52">
        <BalanceInfo />
        <View className="mt-8 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-lighter-black font-semibold text-lg">Transactions History</Text>
            <Text className="text-slate-500 text-sm">See all</Text>
          </View>
          <View className="flex mt-5 gap-4">
            <TransactionItem  title="Upwork" date={new Date()} amount={850}/>
            <TransactionItem  title="Transfer" date={new Date()} amount={-85}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
