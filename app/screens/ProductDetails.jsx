import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto
} from "@expo/vector-icons";

import { productDetailsPageStyles as styles } from "../styles";
import { COLORS, SIZES } from "../constants";
import { useState } from "react";

const ProductDetails = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const incrementItem = () => {
    setCount((count) => ++count);
  };

  const deccrementItem = () => {
    setCount((count) => {
      if (count == 1) {
        return 1;
      } else {
        return --count;
      }
    });
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$660.88</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={incrementItem}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={deccrementItem}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
            ornare aenean euismod elementum nisi. Dolor morbi non arcu risus
            quis varius quam quisque. Mattis rhoncus urna neque viverra justo
            nec ultrices dui sapien. Urna condimentum mattis pellentesque id
            nibh tortor id aliquet. Rhoncus aenean vel elit scelerisque mauris
            pellentesque pulvinar pellentesque. Tellus at urna condimentum
            mattis pellentesque id nibh tortor. Senectus et netus et malesuada
            fames ac turpis egestas integer. Facilisis gravida neque convallis a
            cras semper. Pulvinar neque laoreet suspendisse interdum consectetur
            libero id faucibus nisl. Consectetur a erat nam at lectus. Volutpat
            est velit egestas dui id ornare arcu. Aliquam faucibus purus in
            massa tempor. Ornare suspendisse sed nisi lacus sed viverra. Sapien
            et ligula ullamcorper malesuada. Vel pretium lectus quam id leo.
            Aliquet lectus proin nibh nisl condimentum id venenatis a. Lacinia
            quis vel eros donec ac odio tempor orci dapibus. Scelerisque eu
            ultrices vitae auctor eu augue ut lectus. Fringilla urna porttitor
            rhoncus dolor purus non enim praesent elementum. In tellus integer
            feugiat scelerisque varius morbi. Nullam vehicula ipsum a arcu
            cursus vitae congue mauris. Laoreet id donec ultrices tincidunt
            arcu. Neque sodales ut etiam sit amet nisl. Non consectetur a erat
            nam. Amet consectetur adipiscing elit duis tristique sollicitudin
            nibh sit amet. Sed vulputate mi sit amet mauris commodo quis
            imperdiet. Et tortor consequat id porta nibh venenatis cras sed
            felis. Neque volutpat ac tincidunt vitae semper quis lectus.
            Pharetra convallis posuere morbi leo urna molestie at. Et tortor at
            risus viverra adipiscing at. Blandit libero volutpat sed cras ornare
            arcu. Parturient montes nascetur ridiculus mus mauris.
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text> Dallas </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartBtnText} >BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCartBtn}>
           <Fontisto name="shopping-bag" size={22} color={COLORS.lightwhite}/>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
