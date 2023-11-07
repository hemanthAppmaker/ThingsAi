import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text
          style={{fontSize: wp(10)}}
          className="text-center text-4xl font-bold text-gray-400">
          Jarvis
        </Text>
        <Text
          style={{fontSize: wp(4)}}
          className="text-center tracking-wider text-gray-700 font-semibold">
          the future is AI
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/welcome.png')}
          className="w-72 h-72"
        />
      </View>
      <TouchableOpacity
        className="bg-emerald-600 mx-4 p-4 rounded-2xl"
        onPress={() => navigation.navigate('Home')}>
        <Text className="text-center font-bold text-white">Get started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
