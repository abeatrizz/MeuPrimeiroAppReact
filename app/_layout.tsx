import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function AppLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Filmes',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="favorites"
          options={{
            title: 'Favoritos',
            headerShown: true,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
