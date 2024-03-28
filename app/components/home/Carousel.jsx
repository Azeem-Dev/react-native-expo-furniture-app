import { View, Text, ActivityIndicator } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import { carouselStyles as styles } from "../../styles";
import { COLORS, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { getNewArrivals } from "../../api/db";
import { useEffect, useState } from "react";

const Carousel = () => {
  const navigation = useNavigation();
  const [slides, setSlides] = useState([]);
  const [ids, setIds] = useState([]);
  const { data, error, loading } = useFetch(getNewArrivals);

  useEffect(() => {
    if (data.length > 0) {
      let onlyImagesArray = data.map((c) => c.imageUrl);
      setIds(data.map((c) => c._id));
      setSlides(onlyImagesArray);
    }
  }, [data, error, loading]);

  const navigateToProductDetailPage = (index) => {
    navigation.navigate("ProductDetails", ids[index]);
  };

  return (
    <View style={styles.carouselContainer}>
      {loading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Ooopss something went wrong</Text>
      ) : (
        <SliderBox
          onCurrentImagePressed={navigateToProductDetailPage}
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
      )}
    </View>
  );
};

export default Carousel;
