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
                name="exercise"
                options={{
                    title: "Exercise",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? "barbell" : "barbell-outline"} size={size ?? 20} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default DashboardLayout;