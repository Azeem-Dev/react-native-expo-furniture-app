import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default FontsSetupWrapper = ({ children }) => {
  const [fontsLoaded, fontError] = useFonts({
    light: require("../assets/fonts/Poppins-Light.ttf"),
    regular: require("../assets/fonts/Poppins-Regular.ttf"),
    medium: require("../assets/fonts/Poppins-Medium.ttf"),
    semibold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    bold: require("../assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <Text>Fonts failed to load...</Text>;
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        {children}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
