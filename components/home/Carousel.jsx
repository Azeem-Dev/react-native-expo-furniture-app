import { View, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import { carouselStyles } from "../../styles";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
  ];
  return (
    <View style={carouselStyles.carouselContainer}>
      <SliderBox
        images={slides}
        autoplay={true}
        autoplayDelay={5000}
        autoplayInterval={5000}
        loop={true}
        dotSize={50}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        dotActiveColor="#fff"
        dotStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        dotActiveStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        dotContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
      />
    </View>
  );
};

export default Carousel;
