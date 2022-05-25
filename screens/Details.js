import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import {COLORS, SIZES, FONTS, assets} from '../constants'
import {CircleButton, RectButton, SubInfo, FocusStatusBar, DetailsDesc, DetailsBid} from '../components'
import tw from 'twrnc'
import React from 'react'

const DetailsHeader = ({data, navigation}) =>{
    return(
    <View style={tw`w-full h-[373px]`}>
        <Image 
        source={data.image}
        resizeMode="cover"
        style={tw`w-full h-full`}
        />
        <CircleButton 
        imgUrl={assets.left}
        handlePress={()=> navigation.goBack()}
        left={15}
        top={10}
        />
        <CircleButton 
        imgUrl={assets.heart}
        right={15}
        top={10}
        />
    </View>
    )
}
const Details = ({route, navigation}) => {
    const { data } = route.params;
  return (
      <SafeAreaView style={tw`android:pt-[${StatusBar.currentHeight}px] h-full`}>
          <FocusStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
          <View style={tw.style(`w-full absolute bottom-0 py-5 items-center justify-center bg-[rgba(255,255,255,0.5)]`)}>
              <RectButton minWidth={170} fontSize={SIZES.large}/>
          </View>
          <FlatList 
          data={data.bids}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`pb-5`}
          renderItem={({item})=> <DetailsBid bid={item} />}
          ListHeaderComponent={()=>(
              <React.Fragment>
                  <DetailsHeader data={data} navigation={navigation}/>
                  <SubInfo />
              </React.Fragment>
          )}
          />
      </SafeAreaView>
  )
}

export default Details