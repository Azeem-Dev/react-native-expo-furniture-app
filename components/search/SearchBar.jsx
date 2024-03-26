import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { searchBarStyles } from "../../styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";

const SearchBar = ({ PageName = "SEARCH" }) => {
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
        style={searchBarStyles.searchIcon}
      />
    ) : (
      <Feather name="search" size={24} style={searchBarStyles.searchIcon} />
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
  return (
    <View style={searchBarStyles.searchContainer}>
      <TouchableOpacity>
        <LeftIconBasedOnPage />
      </TouchableOpacity>

      <View style={searchBarStyles.searchWrapper}>
        <TextInput
          placeholder="What are you looking for?"
          style={searchBarStyles.searchInput}
          onPressIn={navigateToSearchPage}
        />
      </View>

      <View>
        <TouchableOpacity style={searchBarStyles.searchBtn}>
          <RightIconBasedOnPage />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
