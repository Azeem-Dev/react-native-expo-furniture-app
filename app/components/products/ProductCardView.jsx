import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { productCardViewStyles as styles } from "../../styles";
import { COLORS } from "../../constants";
import FallBackImage from '../../assets/images/fallback_image.jpg';

const ProductCardView = ({ product }) => {
  const navigation = useNavigation();

  const getImageSource  = () => product.imageUrl ? {uri: product.imageUrl} : FallBackImage;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", product._id);
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={getImageSource()}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {product.supplier}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.price}>${product.price}</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
