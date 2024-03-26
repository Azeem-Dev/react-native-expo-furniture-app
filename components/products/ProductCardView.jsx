import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { productCardViewStyles } from "../../styles";
import { COLORS } from "../../constants";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails");
      }}
    >
      <View style={productCardViewStyles.container}>
        <View style={productCardViewStyles.imageContainer}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
            }}
            style={productCardViewStyles.image}
          />
        </View>

        <View style={productCardViewStyles.details}>
          <Text style={productCardViewStyles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={productCardViewStyles.supplier} numberOfLines={1}>
            Product
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={productCardViewStyles.price}>$123</Text>
            <TouchableOpacity style={productCardViewStyles.addBtn}>
              <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
