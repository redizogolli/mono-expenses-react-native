import { View, Text, Image, ScrollView, FlatList, Dimensions } from "react-native";
import React from "react";
import HeaderBackground from "@/components/HeaderBackground";
import Ionicons from "@expo/vector-icons/Ionicons";
import BalanceInfo from "@/components/BalanceInfo";
import TransactionItem from "@/components/TransactionItem";
import { FlashList } from "@shopify/flash-list";
import { People, Transactions } from "@/utils/constants";

const Home = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-primary-white">
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
      </View>
      <View className="flex-1 mt-8 px-5">
        <View className="flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="text-lighter-black font-semibold text-lg">
              Transactions History
            </Text>
            <Text className="text-slate-500 text-sm">See all</Text>
          </View>
          <View className="flex-1 mt-5 flex gap-4">
            {Transactions.map((item, index) => (
              <TransactionItem
                key={index}
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            ))}
          </View>
        </View>
        <View className="mt-8 flex-1 gap-4">
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold text-lg">Send Again</Text>
            <Text className="text-slate-500 text-sm">See all</Text>
          </View>
          <View>
            <FlashList
              estimatedItemSize={41}
              data={People}
              ItemSeparatorComponent={() => <View style={{width: 16}} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_: any, index: number) => index.toString()}
              renderItem={({ item, index }: any) => (
                <Image
                  key={index}
                  source={{ uri: item.imageUrl }}
                  className="w-16 h-16 rounded-full"
                />
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
