import { View, Text, Image } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchBar() {
  return (
    <View style={{ flexDirection: "row", marginTop:10}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "gray",
            borderRadius: 50,
            flexDirection: "row",
            alignItem: "center",
            marginRight: 10,
          },
        }}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItem: "center",
            }}
          >
            <Text>Search</Text>
          </View>
        )}
      ></GooglePlacesAutocomplete>
    </View>
  );
}
