import { View, Text } from "react-native";
import { searchpageStyles } from "../styles/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../components";

const Search = () => {
  return (
    <SafeAreaView>
      <SearchBar PageName="SEARCH" />
    </SafeAreaView>
  );
};

export default Search;
