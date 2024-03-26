import { View, Text, TouchableOpacity } from "react-native";
import { headingsStyles } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const Headings = () => {
  return (
    <View style={headingsStyles.container}>
      <View style={headingsStyles.header}>
        <Text style={headingsStyles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Ionicons name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
