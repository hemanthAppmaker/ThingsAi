import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Features = () => {
  return (
    <View style={{height: hp(60)}} className="space-y-2">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row item-center space-x-1">
          <Image
            style={{height: hp(4), width: hp(4)}}
            source={require('../../assets/images/chatgptIcon.png')}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="text-gray-700 font-semibold">
            Chatgpt
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          Gives you smart and
        </Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row item-center space-x-1">
          <Image
            style={{height: hp(4), width: hp(4)}}
            source={require('../../assets/images/dalleIcon.png')}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="text-gray-700 font-semibold">
            DAL-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          This is a pararaph
        </Text>
      </View>
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row item-center space-x-1">
          <Image
            style={{height: hp(4), width: hp(4)}}
            source={require('../../assets/images/smartaiIcon.png')}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="text-gray-700 font-semibold">
            SMART AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          This is a pararaph
        </Text>
      </View>
    </View>
  );
};

export default Features;
