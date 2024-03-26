import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

export default headingsStyles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginBottom: -SIZES.small,
    marginHorizontal:SIZES.marginHorizontal,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.xLarge - 2,
  },
});
