import { View, Text, FlatList } from "react-native";
import { productRowStyles } from "../../styles";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={productRowStyles.rowContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return <ProductCardView />;
        }}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
