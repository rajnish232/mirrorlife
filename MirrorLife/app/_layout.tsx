import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('/app/MirrorLife/assets/fonts/Inter-Black.otf'),
    'Inter-BlackItalic': require('/app/MirrorLife/assets/fonts/Inter-BlackItalic.otf'),
    'Inter-Bold': require('/app/MirrorLife/assets/fonts/Inter-Bold.otf'),
    'Inter-BoldItalic': require('/app/MirrorLife/assets/fonts/Inter-BoldItalic.otf'),
    'Inter-ExtraBold': require('/app/MirrorLife/assets/fonts/Inter-ExtraBold.otf'),
    'Inter-ExtraBoldItalic': require('/app/MirrorLife/assets/fonts/Inter-ExtraBoldItalic.otf'),
    'Inter-ExtraLight': require('/app/MirrorLife/assets/fonts/Inter-ExtraLight.otf'),
    'Inter-ExtraLightItalic': require('/app/MirrorLife/assets/fonts/Inter-ExtraLightItalic.otf'),
    'Inter-Italic': require('/app/MirrorLife/assets/fonts/Inter-Italic.otf'),
    'Inter-Light': require('/app/MirrorLife/assets/fonts/Inter-Light.otf'),
    'Inter-LightItalic': require('/app/MirrorLife/assets/fonts/Inter-LightItalic.otf'),
    'Inter-Medium': require('/app/MirrorLife/assets/fonts/Inter-Medium.otf'),
    'Inter-MediumItalic': require('/app/MirrorLife/assets/fonts/Inter-MediumItalic.otf'),
    'Inter-Regular': require('/app/MirrorLife/assets/fonts/Inter-Regular.otf'),
    'Inter-SemiBold': require('/app/MirrorLife/assets/fonts/Inter-SemiBold.otf'),
    'Inter-SemiBoldItalic': require('/app/MirrorLife/assets/fonts/Inter-SemiBoldItalic.otf'),
    'Inter-Thin': require('/app/MirrorLife/assets/fonts/Inter-Thin.otf'),
    'Inter-ThinItalic': require('/app/MirrorLife/assets/fonts/Inter-ThinItalic.otf'),
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
