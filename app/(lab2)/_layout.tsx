import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="index" 
                options={{ title: "Contacts", 
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={24} />
                    )
                }} />
        <Tabs.Screen name="favorites" 
            options={{ title: "Favorites", 
                tabBarIcon: ({ color }) => (
                    <Ionicons name="heart" color={color} size={24} />
                )
            }} />
        <Tabs.Screen name="options" 
            options={{ title: "Options",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="person" color={color} size={24} />
                )
            }} />
    </Tabs>
  )
}
