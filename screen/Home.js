import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../component/HeaderTabs";
import SearchBar from "../component/SearchBar";
import Category from "../component/Category";
import RestaurantItems from "../component/RestaurantItems";

export default function Home() {
  return (
    <SafeAreaView>
    <View style={{ backgroundColor: "#eee", padding: 15, marginTop: 25 }}>
      <HeaderTabs />
      <SearchBar />
    </View>
    <View style={{backgroundColor:'#eee', marginTop:8, paddingVertical:5}}>
    <Category/>
    </View>
    
    </SafeAreaView>
  );
}
