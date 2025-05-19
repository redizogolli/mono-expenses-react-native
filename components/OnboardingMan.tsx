import { View, Image } from "react-native";

const OnboardingMan = () => {
  return (
    <View className="flex-1 w-full relative bg-white">
      <View className="flex-1 items-center justify-end bg-light-primary">
        {/* Images */}
        <Image
          source={require("../assets/images/Man.png")}
          className="z-10 w-man absolute bottom-2"
        />
        <Image
          source={require("../assets/images/Coin.png")}
          className="z-10 absolute left-14 top-36"
        />
        <Image
          source={require("../assets/images/Donut.png")}
          className="z-10 absolute right-14 top-52"
        />
        <Image
          source={require("../assets/images/Shadow.png")}
          className="w-full z-10 absolute bottom-[-20px]"
        />
        <View className="bg-transparent w-full h- border-b-[50px] border-r-[450px] border-r-transparent border-b-white"></View>
      </View>
    </View>
  );
};

export default OnboardingMan;
