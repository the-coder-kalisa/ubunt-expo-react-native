import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import {CircleButton, RectButton} from './Button'
import tw from 'twrnc'
import {SubInfo, EthPrice, NFTTitle} from './SubInfo'

const NFTCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={tw.style(`bg-[${COLORS.white}] my-2 rounded-[${SIZES.font}px] `, {boxShadow: "2px 2px 40px black"})}>
      <View style={tw.style('w-full h-[300px]')}>
        <Image 
        source={data.image}
        resizeMode="cover"
        style={tw.style(`w-full h-full`, {borderTopLeftRadius: SIZES.font})}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
        <View style={tw`bg-white flex-col -mt-[9rem]`}>

        <SubInfo />
        <View style={tw`w-full  p-[${SIZES.font}px]`}>
          <NFTTitle title={data.name} subTitle={data.creator} />
          <View style={tw`flex-row justify-between items-center`}>
            <EthPrice price={data.price}/>
            <RectButton
            minWidth={120}
            handlePress={()=>{navigation.navigate('Details', {data})}}
             />
          </View>
        </View>
        </View>
      </View> 
    </View>
  )
}

export default NFTCard