import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { productRowStyles as styles } from "../../styles";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";
import { getAllProducts } from "../../api/db";
import { useEffect } from "react";

const ProductRow = ({ data, error, loading, screen = "HOME" }) => {

  const isSearchScreen = screen === "SEARCH";
  
  useEffect(() => {}, [data, error, loading]);

  getListBasedOnScreen = () => {
    if (!isSearchScreen) {
      return (
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
      );
    }
    return (
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item }) => {
          return <ProductCardView product={item} />;
        }}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    );
  };
  return (
    <View style={styles.rowContainer}>
      {loading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Ooopss something went wrong</Text>
      ) : getListBasedOnScreen()}
    </View>
  );
};

export default ProductRow;
