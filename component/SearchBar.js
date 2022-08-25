import { View, Text, Image } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Restaurants() {
    return (
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            textInput: {
              backgroundColor: "white",
              borderRadius: 20,
              fontWeight: "700",
              marginTop: 7,
            },
            textInputContainer: {
              backgroundColor: "white",
              borderRadius: 50,
              flexDirection: "row",
              alignItem: "center",
              marginRight: 10,
            },
          }}
          renderLeftButton={() => (
            <View style={{ marginLeft: 10, alignItems:'center', paddingVertical:13}}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          )}
          renderRightButton={() => (
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                marginVertical:8,
                padding:8,
                borderRadius: 30,
                alignItems: "center",
              
              }}
            >
              <AntDesign
                name="clockcircle"
                size={11}
                style={{ marginRight: 6 }}
              />
              <Text>Search</Text>
            </View>
          )}
        />
      </View>
    );
  }
  