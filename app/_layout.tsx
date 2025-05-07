import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='(lab2)' options={{ headerShown: false }} />
      <Stack.Screen name='bai1' options={{ headerShown: false }} />
      <Stack.Screen name='bai2' options={{ headerShown: false }} />
      <Stack.Screen name='lab1' options={{ headerShown: false }} />
      <Stack.Screen name='userLab2' options={{ headerShown: false }} />
    </Stack>
  )
}
