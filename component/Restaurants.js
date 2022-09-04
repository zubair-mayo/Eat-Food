import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localResturant = [
  {
    name: "Beachside Bar",
    image_url:
      "https://www.foodbusinessnews.net/ext/resources/2020/4/CoupleAtRestaurant_Lead.jpg",
    waitingTime: "30 - 35 . min",
    rating: 4.6,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://www.foodbusinessnews.net/ext/resources/2020/4/CoupleAtRestaurant_Lead.jpg",
    waitingTime: "30 - 35 . min",
    rating: 4.7,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://www.foodbusinessnews.net/ext/resources/2020/4/CoupleAtRestaurant_Lead.jpg",
    waitingTime: "30 - 35 . min",
    rating: 4.8,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://www.foodbusinessnews.net/ext/resources/2020/4/CoupleAtRestaurant_Lead.jpg",
    waitingTime: "30 - 35 . min",
    rating: 4.9,
  },
];
export default function Restaurants(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {localResturant.map((restaurants, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImages restImgUrl={restaurants.image_url} />
          <RestaurantsInfo
            resName={restaurants.name}
            dishPreTime={restaurants.waitingTime}
            resRating={restaurants.rating}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImages = (props) => (
  <View>
    <Image
      source={{ uri: props.restImgUrl }}
      style={{ width: "100%", height: 180, borderRadius: 7 }}
    />
    <TouchableOpacity
      style={{ position: "absolute", right: 15, top: 15, color: "white" }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </View>
);

const RestaurantsInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "yellow",
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.resName}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.dishPreTime}</Text>
    </View>
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{props.resRating}</Text>
    </View>
  </View>
);
