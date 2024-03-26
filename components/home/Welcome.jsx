import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { welcomeStyles } from "../../styles";
import { COLORS, SIZES } from "../../constants";

import SearchBar from "../search/SearchBar";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={welcomeStyles.container}>
        <Text style={welcomeStyles.wlcmText()}>Find The Most</Text>
        <Text style={welcomeStyles.wlcmText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <SearchBar PageName="HOME"/>
    </View>
  );
};

export default Welcome;
