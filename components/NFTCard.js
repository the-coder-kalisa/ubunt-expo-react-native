import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import {CircleButton} from './Button'
import tw from 'twrnc'
const NFTCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={tw.style(`bg-[${COLORS.white}] rounded-[${SIZES.font}] mb-[${SIZES.extraLarge}] m-[${SIZES.base}]`, {...SHADOWS.dark})}>
      <View style={tw.style('w-full h-[250px]')}>
        <Image 
        source={data.image}
        resizeMode="cover"
        style={tw.style(`w-full h-full`, {borderTopLeftRadius: SIZES.font})}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
      </View>
    </View>
  )
}

export default NFTCard