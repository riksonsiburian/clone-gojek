/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, Image, TextInput} from 'react-native-tailwind';

const App: () => React$Node = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <View className="flex-1 bg-white">
        {/* main content */}
        <View className="flex-1 p-4">
          {/*  search bar */}
          <View className="flex flex-row h-12 mb-4">
            <View className="flex-1 rounded-full border-2 border-gray-400  bg-white flex-row items-center">
              <Image
                className="w-8 h-8 mx-2"
                source={require('./icons/search.png')}
              />
              <TextInput
                placeholder="What do you want to eat ?"
                className="p-2"
              />
            </View>
            <View className="w-12 h-12 ml-4 flex item-center justify-center">
              <Image
                className="w-10 h-10"
                source={require('./icons/promo.png')}
              />
            </View>
          </View>

          {/* gopay */}
          <View
            className="flex flex-col rounded-lg border-2"
            style={{borderColor: '#205dc0'}}>
            <View
              className="p-4 w-full flex justify-between flex-row"
              style={{backgroundColor: '#2261c4'}}>
              <Image className="" source={require('./icons/gopay.png')} />
              <Text className="text-white font-bold text-lg">Rp. 50.000</Text>
            </View>
            <View
              className="flex flex-row justify-around py-4"
              style={{backgroundColor: '#205dc0'}}>
              <View className="h-16 w-16 flex items-center justify-center">
                <View className="w-8 h-8 m-1">
                  <Image
                    className="w-8 h-8"
                    source={require(`./icons/pay.png`)}
                  />
                </View>
                <Text className="text-white text-xs">Pay</Text>
              </View>
              <View className="h-16 w-16 flex items-center justify-center">
                <View className="w-8 h-8 m-1">
                  <Image
                    className="w-8 h-8"
                    source={require(`./icons/nearby.png`)}
                  />
                </View>
                <Text className="text-white text-xs">Nearby</Text>
              </View>
              <View className="h-16 w-16 flex items-center justify-center relative">
                <View className="w-8 h-8 m-1">
                  <Image
                    className="w-8 h-8"
                    source={require(`./icons/topup.png`)}
                  />
                </View>
                <Text className="text-white text-xs">Top Up</Text>
              </View>
              <View className="h-16 w-16 flex items-center justify-center">
                <View className="w-8 h-8 m-1">
                  <Image
                    className="w-8 h-8"
                    source={require(`./icons/more.png`)}
                  />
                </View>
                <Text className="text-white text-xs">More</Text>
              </View>
            </View>
          </View>
        </View>
        {/* bottom navigation */}
        <View className="h-16 bg-white flex flex-row justify-around">
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image
                className="w-8 h-8"
                source={require(`./icons/home-active.png`)}
              />
            </View>
            <Text className="text-gray-600 text-xs">Home</Text>
          </View>
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image
                className="w-8 h-8"
                source={require('./icons/order.png')}
              />
            </View>
            <Text className="text-gray-700 text-xs">Orders</Text>
          </View>
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image className="w-8 h-8" source={require('./icons/help.png')} />
            </View>
            <Text className="text-gray-700 text-xs">Help</Text>
          </View>
          <View className="h-16 w-16 flex items-center justify-center relative">
            <View className="w-8 h-8 m-1">
              <Image
                className="w-8 h-8"
                source={require('./icons/inbox.png')}
              />
            </View>
            <Text className="text-gray-700 text-xs">Inbox</Text>
            <View className="rounded-full h-6 w-6 flex items-center justify-center bg-red-500 absolute right-0 top-0">
              <Text className="text-white text-xs">1</Text>
            </View>
          </View>
          <View className="h-16 w-16 flex items-center justify-center">
            <View className="w-8 h-8 m-1">
              <Image
                className="w-8 h-8"
                source={require('./icons/account.png')}
              />
            </View>
            <Text className="text-gray-700 text-xs">Account</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
