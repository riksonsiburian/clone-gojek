/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {Text, View, Image} from 'react-native-tailwind'

const App: () => React$Node = () => {
  const [ active, setActive ] = useState(false)

  return (
    <>
      <View className="flex-1 bg-gray-800">
        <View className="flex-1 bg-gray-300"></View>
        <View className="h-16 bg-white flex flex-row justify-around">
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image className="w-8 h-8" source={ require(`./icons/home.png`) }></Image>
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
