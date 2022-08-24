import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../component/HeaderTabs";
import SearchBar from "../component/SearchBar";
import Category from "../component/Category";

export default function Home() {
  return (
    <SafeAreaView>
    <View style={{ backgroundColor: "yellow", padding: 15, marginTop: 25 }}>
      <HeaderTabs />
      <SearchBar />
    </View>
   <Category/>
    

    </SafeAreaView>
  );
}
