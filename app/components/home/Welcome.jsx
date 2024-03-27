import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { welcomeStyles as styles } from "../../styles";
import { COLORS, SIZES } from "../../constants";

import SearchBar from "../search/SearchBar";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.wlcmText()}>Find The Most</Text>
        <Text style={styles.wlcmText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <SearchBar PageName="HOME" />
    </View>
  );
};

export default Welcome;
