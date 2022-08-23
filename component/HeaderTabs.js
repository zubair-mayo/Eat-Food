import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTabP={activeTab}
        setActiveTabP={setActiveTab}
      />
      <HeaderButton
        text="Product"
        btnColor="black"
        textColor="white"
        activeTabP={activeTab}
        setActiveTabP={setActiveTab}
      />
      <HeaderButton
        text="Service"
        btnColor="black"
        textColor="white"
        activeTabP={activeTab}
        setActiveTabP={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTabP={activeTab}
        setActiveTabP={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTabP === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        margin: 4,
      }}
      onPress={() => props.setActiveTabP(props.text)}
    >
      <Text
        style={{
          color: props.activeTabP === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
