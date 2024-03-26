import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";

export default homepageStyles = StyleSheet.create({
  text: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartContainer: {
    alignItems: "flex-end",
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  cartCountNumberColor: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightwhite,
  },
});
