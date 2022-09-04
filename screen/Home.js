import { View, ScrollView, SafeAreaView } from "react-native";
import HeaderTabs from "../component/HeaderTabs";
import SearchBar from "../component/SearchBar";
import Category from "../component/Category";
import Restaurants from "../component/Restaurants";
import RestaurantItems from "../component/RestaurantItems";

function Home() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#eee", padding: 15, marginTop: 25 }}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 100 }}
      >
        <Category />
        <Restaurants />
        <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;
