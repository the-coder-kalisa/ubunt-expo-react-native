import { View, Text } from 'react-native'
import {useState, useEffect} from 'react'
import  { EthPrice, NFTTitle } from './SubInfo'
import tw from 'twrnc'
const DetailsDesc = ({data}) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);
    useEffect(()=>{
        readMore ? setText(data.description) : setText(data.description.slice(0, 100))
    },[readMore])
  return (
    <>
    <View style={tw.style(`flex-row justify-between items-center`, {width: '100%'})}>
      <NFTTitle title={data.name} subTitle={data.creator}/>
      <EthPrice price={data.price}/>
    </View>
      <View style={tw`my-5`}>
          <Text style={tw`font-bold text-xl`}>Description</Text>
      </View>
      <View style={tw`mt-1  `}>
           <Text style={tw`text-lg leading-6 text-gray-500`}>{text}
              {!readMore && '...'}
           <Text
           onPress={() => setReadMore(!readMore)}
            style={tw`text-lg leading-6 text-black font-bold`}>
             {readMore ? 'Show Less' : 'Read more'}
           </Text>
           </Text>
           
      </View>
    </>
  )
}

export default DetailsDesc