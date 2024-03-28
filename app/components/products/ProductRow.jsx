import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { productRowStyles as styles } from "../../styles";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";
import { getAllProducts } from "../../api/db";
import { useEffect } from "react";

const ProductRow = () => {
  const { data, error, loading } = useFetch(getAllProducts);

  useEffect(() => {}, [data, error, loading]);

  return (
    <View style={styles.rowContainer}>
      {loading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Ooopss something went wrong</Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => item._id}
          renderItem={({ item }) => {
            return <ProductCardView product={item} />;
          }}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
