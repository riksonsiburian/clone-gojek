/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {Text, View, Image, TextInput} from 'react-native-tailwind'

const App: () => React$Node = () => {
  const [ active, setActive ] = useState(false)

  return (
    <>
      <View className="flex-1 bg-white">

        {/* main content */}
        <View className="flex-1 p-4">

        {/*  search bar */}
        <View className="flex flex-row h-12">
          <View className="flex-1 rounded-full border-2 border-gray-400  bg-white flex-row items-center">
            <Image className="w-8 h-8 mx-2" source={ require('./icons/search.png') }></Image>
            <TextInput placeholder="What do you want to eat ?" className="p-2" ></TextInput>
          </View>
          <View className="w-12 h-12 ml-4 flex item-center justify-center">
            <Image className="w-10 h-10" source={ require('./icons/promo.png') }></Image>
          </View>
        </View>

        </View>
        {/* bottom navigation */}
        <View className="h-16 bg-white flex flex-row justify-around">
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image className="w-8 h-8" source={ require(`./icons/home-active.png`) }></Image>
            </View>
            <Text className="text-gray-600 text-xs">Home</Text>
          </View>
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image className="w-8 h-8" source={ require('./icons/order.png') }></Image>
            </View>
            <Text className="text-gray-700 text-xs">Orders</Text>
          </View>
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image className="w-8 h-8" source={ require('./icons/help.png') }></Image>
            </View>
            <Text className="text-gray-700 text-xs">Help</Text>
          </View>
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image className="w-8 h-8" source={ require('./icons/inbox.png') }></Image>
            </View>
            <Text className="text-gray-700 text-xs">Inbox</Text>
          </View>
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image className="w-8 h-8" source={ require('./icons/account.png') }></Image>
            </View>
            <Text className="text-gray-700 text-xs">Account</Text>
          </View>


        </View>
      </View>
    </>
  );
};


export default App;
