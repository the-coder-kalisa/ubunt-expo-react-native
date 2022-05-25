import { View, Text, SafeAreaView, FlatList, StatusBar } from 'react-native'
import {useState} from 'react'
import { COLORS, NFTData } from '../constants'
import { HomeHeader, NFTCard, FocusStatusBar } from '../components'
import tw from 'twrnc'
const Home = () => {
    const [nftData, setNftData] = useState(NFTData);
    const handleSearch = (value) =>{
        if(value === "") return setNftData(NFTData);
        const fildterddata = NFTData.filter((item) =>(item.name.toLowerCase().includes(value.toLowerCase())));
        if(fildterddata){
            setNftData(fildterddata);
        }else{
            setNftData(NFTData);
        }
    }
  return (
    <SafeAreaView style={tw.style(`ios:pt-[${StatusBar.currentHeight}px]`, {flex: 1})}>
      <FocusStatusBar  background={COLORS.primary}/>
      <View style={tw.style('', {flex: 1})}>
          <View style={tw.style(``, {zIndex:0})}>
              <FlatList 
              data={nftData}
              keyExtractor={(item) => item.id}
              renderItem={({item})=> <NFTCard data={item}/>}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
              />
          </View>
          <View style={tw.style(`absolute top-0 bottom-0 left-0 right-0`, {zIndex: -1})}>
              <View style={tw`h-[300px] bg-[${COLORS.primary}]`}></View>
              <View style={tw.style(`bg-[${COLORS.white}]`, {flex: 1})}></View>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Home