import { StyleSheet, Text, View } from "react-native";
import FontsSetupWrapper from "./setup/FontsSetup";
import NavigationSetupWrapper from "./navigation/NavigationSetup";

export default function App() {
  return (
    <FontsSetupWrapper>
      <NavigationSetupWrapper />
    </FontsSetupWrapper>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "extrabold",
    fontSize: 26,
  },
});
