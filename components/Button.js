import { TouchableOpacity,View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={tw.style(`h-[40px] w-[40px] absolute rounded-[${SIZES.extraLarge}] justify-center items-center bg-[${COLORS.white}]`,{...SHADOWS.light, ...props})}>
      <Image 
      source={imgUrl}
      resizeMode="contain"
      style={tw.style('w-[24px] h-[24px]')}
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, handlePress, ...props}) => {
    return (
      <TouchableOpacity
      style={tw`rounded-full bg-[${COLORS.primary}] items-center justify-center p-2 px-7 `}
      onPress={handlePress}
      >
        <Text style={tw`text-white`}>Place a bid</Text>
      </TouchableOpacity>
    )
  }
  