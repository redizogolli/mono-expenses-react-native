import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#408782',
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                paddingTop: 15,
                height: 70,
            },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="statistics"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="pie-chart" color={color} />,
                }}
            />
            {/* <Tabs.Screen
                name="wallet"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="google-wallet" color={color} />,
                }}
            /> */}
            <Tabs.Screen
                name="wallet"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="google-wallet" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout