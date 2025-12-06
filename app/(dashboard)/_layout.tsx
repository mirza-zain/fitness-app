import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import exerciseStore from "../store/ExerciseStore";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DashboardLayout = () => {
    const insets = useSafeAreaInsets();

    return (
        <Provider store={exerciseStore}>
            <Tabs
                screenOptions={{
                    headerShown: true,
                    header: () => (
                        <View style={{ 
                            paddingTop: 50,
                            paddingBottom: 10,
                            paddingLeft: 16,
                            backgroundColor: "#232423",
                        }}>
                            <Text style={{ 
                                fontSize: 35, 
                                fontWeight: "700",
                                textAlign: "left",
                                color: "#ffff"
                            }}>TitanRep</Text>
                        </View>
                    ),
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
        </Provider>
    );
};

export default DashboardLayout;