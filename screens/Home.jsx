import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";

import { homepageStyles } from "../styles";
import { Carousel, Headings, ProductRow, Welcome } from "../components";

const Home = () => {
  return (
    <SafeAreaView >
      <View style={homepageStyles.appBarWrapper}>
        <View style={homepageStyles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={homepageStyles.location}>Shanghai, China</Text>
          <View style={homepageStyles.cartContainer}>
            <View style={homepageStyles.cartCount}>
              <Text style={homepageStyles.cartCountNumberColor}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView >
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
