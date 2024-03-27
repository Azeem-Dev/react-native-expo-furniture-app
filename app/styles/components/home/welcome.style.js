import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";

export default welcomeStyles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal:SIZES.marginHorizontal,
  },
  wlcmText: (color, top = SIZES.xSmall) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 8,
    marginTop: top,
    color: color,
    // marginHorizontal: 12,
  })
});
