import { TouchableOpacity,View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={tw.style(`h-[40px] w-[40px] absolute rounded-[${SIZES.extraLarge}] justify-center bg-[${COLORS.white}]`,{...SHADOWS.light, ...props})}>
      <Image 
      source={imgUrl}
      resizeMode="contain"
      style={tw.style('w-[24px] h-[24px]')}
      />
    </TouchableOpacity>
  )
}

export const RectButton = () => {
    return (
      <View>
        <Text>RectButton</Text>
      </View>
    )
  }
  