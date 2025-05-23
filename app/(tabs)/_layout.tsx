import FontAwesome from "@expo/vector-icons/FontAwesome";
import { usePathname, useRouter } from "expo-router";
import { StatusBar, TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { FeGaussianBlur, FeMerge, FeMergeNode, FeOffset, Filter, Path } from "react-native-svg";
import { Dimensions } from "react-native";
import Home from "./home";
import Statistics from "./statistics";
import Wallet from "./wallet";
import Profile from "./profile";

const CustomTabBarButton = ({
  children,
  onPress,
}: {
  children?: React.ReactNode;
  onPress: any;
}) => (
  <TouchableOpacity
    className="w-nav-btn h-nav-btn bg-primary-text rounded-full shadow-lg absolute -top-nav-btn-top left-1/2 -translate-x-1/2 items-center justify-center"
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const Shape = ({ isHome }: { isHome: boolean }) => {
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = 80;
  const CORNER_RADIUS = 12;
  let CUTOUT_RADIUS = isHome ? 42 : 0;
  const CUTOUT_LEFT_X = WIDTH / 2 - CUTOUT_RADIUS;
  const CUTOUT_RIGHT_X = WIDTH / 2 + CUTOUT_RADIUS;

  /**
   * Line by line explanation
   * - Start in the bottom-left
   * - Draw a line towards the top-left to the start of our corner radius,
   *    use the top-left as the curve control point,
   *    and curve to the other end of our corner radius
   * - Draw a line to the left edge of our cutout
   * - Draw an elliptical arc with an equal x and y radius to create a circle,
   *     have 0 rotation on the x-axis,
   *     use the smaller arc (we could use either as they are equal),
   *     sweep the arc in a counter-clockwise direction,
   *     complete the arc on the right cutout point
   * - Draw a line towards the top-right to the start of our corner radius,
   *    use the top-right as the curve control point,
   *    and curve to the other end of our corner radius
   * - Draw a line to bottom-right
   * - Close the path
   */
  const d = `
      M0,${HEIGHT}
      L0,${CORNER_RADIUS} Q0,0 ${CORNER_RADIUS},0
      L${CUTOUT_LEFT_X},0
      A${CUTOUT_RADIUS},${CUTOUT_RADIUS} 0 0 0 ${CUTOUT_RIGHT_X},0
      L${WIDTH - CORNER_RADIUS},0 Q${WIDTH},0 ${WIDTH},${CORNER_RADIUS}
      L${WIDTH},${HEIGHT}
      Z`;
  return (
    <Svg className="w-full h-full">
      <Path fill={"#fff"} d={d}/>
    </Svg>
  );
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <>
      <StatusBar
        barStyle="default"
        hidden={false}
        animated
        translucent={true}
        className="bg-transparent"
      />
      <Tab.Navigator tabBar={(props) => <CustomTabBar />}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="statistics"
          component={Statistics}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="wallet"
          component={Wallet}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const CustomTabBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <View className="relative h-20 w-full ">
      <Shape isHome={pathname === "/home"} />
      <View className="absolute top-4 left-0 w-full flex-row justify-around items-center">
        <View className="flex-row justify-around items-center flex-1">
          <TouchableOpacity
            className=""
            onPress={() => {
              router.navigate("/home");
            }}
          >
            <Ionicons
              size={36}
              name={pathname === "/home" ? `home` : "home-outline"}
              color={pathname === "/home" ? `#408782` : "#AAAAAA"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className=""
            onPress={() => {
              router.navigate("/statistics");
            }}
          >
            <Ionicons
              size={36}
              name={
                pathname === "/statistics"
                  ? `stats-chart`
                  : "stats-chart-outline"
              }
              color={pathname === "/statistics" ? `#408782` : "#AAAAAA"}
            />
          </TouchableOpacity>
        </View>
        {pathname === "/home" && (
          <View className="relative w-16">
            <CustomTabBarButton onPress={() => {}}>
              <FontAwesome size={36} name="plus" color={"white"} />
            </CustomTabBarButton>
          </View>
        )}
        <View className="flex-row justify-around items-center flex-1">
          <TouchableOpacity
            className=""
            onPress={() => {
              router.navigate("/wallet");
            }}
          >
            <Ionicons
              size={36}
              name={pathname === "/wallet" ? `wallet` : "wallet-outline"}
              color={pathname === "/wallet" ? `#408782` : "#AAAAAA"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className=""
            onPress={() => {
              router.navigate("/profile");
            }}
          >
            <FontAwesome
              size={36}
              name={pathname === "/profile" ? `user` : "user-o"}
              color={pathname === "/profile" ? `#408782` : "#AAAAAA"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// const TabsLayout = () => {
//   const pathname = usePathname();
//   return (
//     <>
//       <StatusBar
//         barStyle="default"
//         hidden={false}
//         animated
//         translucent={true}
//         className="bg-transparent"
//       />
//       <Tabs
//         screenOptions={{
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: "#408782",
//           tabBarInactiveTintColor: "#AAAAAA",
//           tabBarItemStyle: {
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           },
//           tabBarStyle: {
//             position: "relative",
//             paddingTop: 10,
//             height: 60,
//             backgroundColor: "white",
//             borderTopWidth: 0,
//             shadowColor: "#000",
//             //curved svg

//           },
//           tabBar
//         }}
//       >
//         <Tabs.Screen
//           name="home"
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ color }) => (
//               <Ionicons size={28} name={pathname === '/home'?`home`:'home-outline'} color={color} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="statistics"
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ color }) => (
//               <Ionicons size={28} name={pathname === '/statistics'?`stats-chart`:'stats-chart-outline'} color={color} />
//             ),
//           }}
//         />
//         {pathname === '/home' ? (
//           <Tabs.Screen
//             name="wallet2"
//             options={{
//               headerShown: false,
//               tabBarStyle: {
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//               },
//               tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={'white'} />,
//               tabBarButton: (props) => (
//                 <CustomTabBarButton {...props} onPress={props.onPress}></CustomTabBarButton>
//               ),
//             }}
//           />
//         ) : (
//           <Tabs.Screen
//             name="wallet2"
//             options={{
//               headerShown: false,
//               href: null
//             }}
//           />
//         )}
//         <Tabs.Screen
//           name="wallet"
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ color }) => (
//               <Ionicons size={28} name={pathname === '/wallet'?`wallet`:'wallet-outline'} color={color} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="profile"
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ color }) => (
//               <FontAwesome size={28} name={pathname === '/profile'?`user`:'user-o'} color={color} />
//             ),
//           }}
//         />
//       </Tabs>
//     </>
//   );
// };

// export default TabsLayout;
