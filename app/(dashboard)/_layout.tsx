import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    paddingTop: 10,
                    height: 90,
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {
                    fontSize: 12,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={size ?? 20} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? "person-circle" : "person-outline"} size={size ?? 20} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default DashboardLayout;