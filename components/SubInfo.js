import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {SIZES, SHADOWS, FONTS,COLORS, assets} from '../constants'

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}
export const EthPrice = () => {
    return (
      <View>
        <Text>price</Text>
      </View>
    )
}
export const ImageCmp = ({imgUrl, index}) => {
    return (
        <Image 
        source={imgUrl}
        resizeMode="contain"
        style={tw`w-[48px] h-[48px] ${index === 0 ? "ml-0" : `-ml-[${SIZES.font}px]`}`}
        />
    )
}

export const People = () => {
    return (
      <View style={tw`flex-row`}>
          {[assets.person02, assets.person03, assets.person04].map((imageUrl, index)=>(
              <ImageCmp imgUrl={imageUrl} index={index} key={`People-${index}`}/>
          ))}
      </View>
    )
}
export const EndDate = () => {
    return (
      <View style={tw.style(`bg-[${COLORS.white}] p-1 items-center max-w-[50%] jusity-center`, { ...SHADOWS.light})}>
       <Text style={tw``}>End IN</Text>
       <Text style={tw`font-bold text-lg`}>12h 30m</Text>
      </View>
    )
}
export const SubInfo = () => {
    return (
      <View 
      style={tw.style(`items-center`,
      {width: '100%', 
      paddingHorizontal: SIZES.font, 
      flexDirection: "row", 
      justifyContent: "space-between"})}
      >
          <People />
          <EndDate />
      </View>
    )
}