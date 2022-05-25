import { View, Text, Image, TextInput } from 'react-native'

import {COLORS, assets, FONTS, SIZES} from '../constants'
import tw from 'twrnc'
const HomeHeader = ({onSearch}) => {
  return (
    <View style={tw`bg-[${COLORS.primary}] p-5`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Image 
        source={assets.logo}
        resizeMode="contain"
        style={tw`w-[90px] h-[45px]`}
        />
        <View style={{width: 45, height: 45}}>
          <Image 
          source={assets.person01}
          style={tw`w-full h-full`}
          resizeMode="contain"
          />
          <Image 
          source={assets.badge}
          style={tw`w-full absolute h-[15px] w-[15px] right-0 bottom-9 h-full`}
          resizeMode="contain"
          />
        </View>
      </View>
      <View>
        <Text style={tw`text-white`}>Hello, the coder </Text>
        <Text style={tw`text-white font-bold text-lg`}>Let's find a masterpiece</Text>
      </View>
      <View style={tw`mt-2`}>
        <View style={tw`w-full rounded-2 bg-gray-500 flex-row items-center py-2 px-2`}>
          <Image 
          source={assets.search}
          resizeMode="contain"
          style={tw`w-[20px] h-[20px] mr-2`}
          />
          <TextInput placeholder="Search NTFS" onChangeText={onSearch} style={tw.style('text-white', {flex: 1})}/>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader