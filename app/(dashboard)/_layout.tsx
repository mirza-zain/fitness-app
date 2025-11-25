import { Stack, Tabs } from "expo-router"


const DashboardLayout = () => {
    return (
        <>
        <Tabs 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    paddingTop: 10,
                    height: 90
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray"
             }}
        >
            <Tabs.Screen
                name="home"
                options={{ title: "Home" }} 
            />
            <Tabs.Screen
                name="about"
                options={{ title: "About" }} 
            />
        </Tabs>
        </>
    )
}

export default DashboardLayout