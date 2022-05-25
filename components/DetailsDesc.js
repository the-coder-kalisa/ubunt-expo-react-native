import { View, Text } from 'react-native'
import {useState} from 'react'
import  { EthPrice, NFTTitle } from './SubInfo'
import tw from 'twrnc'
const DetailsDesc = ({data}) => {
    const [text, setText] = useState(data.description.slice(0, 100));
  return (
    <>
    <View style={tw.style(`flex-row justify-between items-center`, {width: '100%'})}>
      <NFTTitle title={data.name} subTitle={data.creator}/>
      <EthPrice price={data.price}/>
    </View>
      <View style={tw`my-5`}>
          <Text style={tw`text-lg leading-6 text-gray-500`}>{data.description}</Text>
      </View>
    </>
  )
}

export default DetailsDesc