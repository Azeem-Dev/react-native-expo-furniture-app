import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";

export default searchpageStyles = StyleSheet.create({
  imageContainer: {
    width: SIZES.width * 0.92,
    height: 500,
    overflow: "hidden", // Clip any content that overflows the container
  },
  image: {
    flex: 1, // Take up all available space within the container
    aspectRatio: 1,
    resizeMode: "cover",
    marginTop:100
  },
});
