import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";

import { homepageStyles as styles } from "../styles";
import { Carousel, Headings, ProductRow, Welcome } from "../components";
import { getAllProducts } from "../api/db";
import useFetch from "../hook/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch(getAllProducts);
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Shanghai, China</Text>
          <View style={styles.cartContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cartCountNumberColor}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow data={data} error={error} loading={loading} screen="HOME" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
