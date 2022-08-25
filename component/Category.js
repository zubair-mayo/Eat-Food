import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items=[
  {
    images: require('../assets/images/cart.jpg'),
    text: "Fast-Food",
  },
  {
    images: require('../assets/images/shopping-bag.jpg'),
    text: "soft-Food",
  },
  {
    images: require('../assets/images/shopping.jpg'),
    text: "junk-Food",
  },
  {
    images: require('../assets/images/cart.jpg'),
    text: "Fast-Food",
  },
  {
    images: require('../assets/images/shopping-bag.jpg'),
    text: "soft-Food",
  },
  
]

export default function Category() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item,index)=>(
    <View key={index} style={{alignItems:'center', marginRight:30, marginStart:10}}>
      <Image source={item.images} style={{width:60, height:60, resizeMode:'contain'}}/>
      <Text style={{fontSize:13, fontWeight:'900'}}>{item.text}</Text>
    </View>
       ) )
}
    </ScrollView>
  )
}