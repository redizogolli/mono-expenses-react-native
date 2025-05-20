import { View, Image } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

//get children from props
interface HeaderBackgroundProps {
  children?: React.ReactNode;
}
const HeaderBackground = (props: HeaderBackgroundProps) => {
  return (
    <View className="relative w-full h-72 bg-primary-text">
      <Image
        source={require("../assets/images/header-shape.png")}
        alt="shape"
        className="z-10 h-56 w-64 absolute -left-14 top-0"
      />
      <View className="bg-primary-text absolute bottom-0 left-0 w-full h-12 overflow-hidden">
        <Svg
          data-name="Layer 1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <Path
            fill="white"
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          ></Path>
        </Svg>
      </View>
      {props.children}
    </View>
  );
};

export default HeaderBackground;
