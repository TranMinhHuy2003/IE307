import { View, Text,Image } from 'react-native'
import React from 'react'

export default function PageCtHoa({ navigation,route }) {
  var hoachon=route.params.hoa;
  return (
    <View>
      <Text>Tên Hoa :{hoachon.tenhoa}</Text>
      <Image source={hoachon.hinh}  />
      <Text>Tên Hoa {hoachon.mota}</Text>
    </View>
  )
}