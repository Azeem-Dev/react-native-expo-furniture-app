import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";

export default productCardViewStyles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.45,
    height: 240,
    marginEnd: SIZES.width * 0.018,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginTop:SIZES.height * 0.01
  },
  imageContainer: {
    flex: 1,
    width: SIZES.width * 0.40,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  addBtn:{
    marginTop:-14
  }
});
