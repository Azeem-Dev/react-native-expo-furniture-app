import { View, Text, TouchableOpacity } from "react-native";
import { headingsStyles as styles } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Ionicons name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
