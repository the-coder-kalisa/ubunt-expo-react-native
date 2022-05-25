import { View, Text, SafeAreaView, FlatList, StatusBar } from 'react-native'
import {useState} from 'react'
import { COLORS, NFTData } from '../constants'
import { HomeHeader, NFTCard, FocusStatusBar } from '../components'
import tw from 'twrnc'
const Home = () => {
  return (
    <SafeAreaView style={tw.style(`ios:pt-[${StatusBar.currentHeight}px]`, {flex: 1})}>
      <FocusStatusBar  background={COLORS.primary}/>
      <View style={tw.style('', {flex: 1})}>
          <View style={tw.style(``, {zIndex:0})}>
              <FlatList 
              data={NFTData}
              keyExtractor={(item) => item.id}
              renderItem={({item})=> <NFTCard data={item}/>}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader />}
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