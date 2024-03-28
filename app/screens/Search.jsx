import { View, Text, ActivityIndicator, Image } from "react-native";
import { searchpageStyles as styles } from "../styles/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDebounce } from "use-debounce";
import { ProductRow, SearchBar } from "../components";
import SearchFallBackImage from "../assets/images/search_fallback.png";
import useFetch from "../hook/useFetch";
import { searchProduct } from "../api/db";
import { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants";

const Search = () => {
  const [search, setSearch] = useState("");
  
  const [value] = useDebounce(search, 500);

  const { data, error, loading, refetch } = useFetch(() =>
    searchProduct(value)
  );

  useEffect(() => {
    setSearch("");
  }, []);

  useEffect(() => {
   refetch(() => searchProduct(value));
  }, [value]);

  const updateSearchCallBack = (val) => {
    setSearch(val);
  };
  return (
    <SafeAreaView>
      <SearchBar
        PageName="SEARCH"
        value={search}
        updateSearchCallBack={updateSearchCallBack}
      />
      {loading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Ooopss something went wrong</Text>
      ) : data.length > 0 ? (
        <ProductRow
          data={data}
          error={error}
          loading={loading}
          screen="SEARCH"
        />
      ) : (
        <View style={styles.imageContainer}>
          <Image source={SearchFallBackImage} style={styles.image} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
