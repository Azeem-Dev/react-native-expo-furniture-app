import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { searchBarStyles as styles } from "../../styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";

const SearchBar = ({ PageName = "SEARCH", value, updateSearchCallBack }) => {
  const navigation = useNavigation();
  const isHomePage = PageName === "HOME";

  const navigateToSearchPage = () => {
    if (isHomePage) navigation.navigate("Search");
  };

  const LeftIconBasedOnPage = () => {
    return !isHomePage ? (
      <Ionicons
        name="camera-outline"
        size={SIZES.xLarge}
        style={styles.searchIcon}
      />
    ) : (
      <Feather name="search" size={24} style={styles.searchIcon} />
    );
  };

  const RightIconBasedOnPage = () => {
    return !isHomePage ? (
      <Feather name="search" size={24} color={COLORS.offwhite} />
    ) : (
      <Ionicons
        name="camera-outline"
        size={SIZES.xLarge}
        color={COLORS.white}
      />
    );
  };

  const getSearchBarForSearchPage = () => {
    return isHomePage ? (
      <TextInput
        placeholder="What are you looking for?"
        style={styles.searchInput}
        onPressIn={navigateToSearchPage}
      />
    ) : (
      <TextInput
        placeholder="What are you looking for?"
        style={styles.searchInput}
        onChangeText={(val) => updateSearchCallBack(val)}
        value={value}
      />
    );
  };
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <LeftIconBasedOnPage />
      </TouchableOpacity>

      <View style={styles.searchWrapper}>{getSearchBarForSearchPage()}</View>

      <View>
        <TouchableOpacity style={styles.searchBtn}>
          <RightIconBasedOnPage />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
