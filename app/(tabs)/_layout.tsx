import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StatusBar, TouchableOpacity } from "react-native";
import { usePathname } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomTabBarButton = ({ children, onPress }: { children?: React.ReactNode, onPress: any }) => (
  <TouchableOpacity
    className="w-16 h-16 bg-primary-text rounded-full shadow-lg absolute -top-12 left-1/2 -translate-x-1/2 items-center justify-center"
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const TabsLayout = () => {
  const pathname = usePathname();
  return (
    <>
      <StatusBar
        barStyle="default"
        hidden={false}
        animated
        translucent={true}
        className="bg-transparent"
      />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#408782",
          tabBarInactiveTintColor: "#AAAAAA",
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarStyle: {
            position: "relative",
            paddingTop: 10,
            height: 60,
            backgroundColor: "white",
            borderTopWidth: 0,
            shadowColor: "#000",
            //curved svg 

          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name={pathname === '/home'?`home`:'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="statistics"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name={pathname === '/statistics'?`stats-chart`:'stats-chart-outline'} color={color} />
            ),
          }}
        />
        {pathname === '/home' ? (
          <Tabs.Screen
            name="wallet2"
            options={{
              headerShown: false,
              tabBarStyle: {
                position: "absolute",
                bottom: 0,
                left: 0,
              },
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={'white'} />,
              tabBarButton: (props) => (
                <CustomTabBarButton {...props} onPress={props.onPress}></CustomTabBarButton>
              ),
            }}
          />
        ) : (
          <Tabs.Screen
            name="wallet2"
            options={{
              headerShown: false,
              href: null
            }}
          />
        )}
        <Tabs.Screen
          name="wallet"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name={pathname === '/wallet'?`wallet`:'wallet-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name={pathname === '/profile'?`user`:'user-o'} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
