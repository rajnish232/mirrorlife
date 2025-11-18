import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import '@fontsource/inter/400.css';
import '@fontsource/noto-sans-jp/400.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'NeueHaasGroteskDisplay': require('../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
    'SourceHanSansHeavy': require('../../node_modules/@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-400-normal.woff'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
