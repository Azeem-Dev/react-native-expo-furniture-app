import { View, Text } from "react-native";
import { searchpageStyles } from "../styles/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDebounce } from "use-debounce";
import { ProductRow, SearchBar } from "../components";
import SearchFallBackImage from "../assets/images/search_fallback.png";
import useFetch from "../hook/useFetch";
import { searchProduct } from "../api/db";
import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  const { data, error, loading, refetch } = useFetch(() =>
    searchProduct(search)
  );

  useEffect(() => {
    setSearch("");
  }, []);

  useEffect(() => {
    if (!loading) refetch(() => searchProduct(value));
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
      <ProductRow data={data} error={error} loading={loading} screen="SEARCH" />
    </SafeAreaView>
  );
};

export default Search;
