import { View, Text, Image } from 'react-native'
import React from 'react'
import {EthPrice} from './SubInfo'
import tw from 'twrnc'
const DetailsBid = ({bid}) => {
  return (
    <View style={tw`flex items-center w-full justify-between my-2 flex-row `}>
      <Image
      source={bid.image}
      resizeMode="contain"
      style={tw`w-[48px] h-[48px]`}
      />
      <View>
          <Text style={tw`font-semibold text-lg`}>
              Bid placed by {bid.name}
          </Text>
          <Text style={tw`text-sm max-w-[12rem] text-center text-gray-500`}>
              Bid placed by {bid.date}
          </Text>
      </View>
      <EthPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid