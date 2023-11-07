import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from './Features';
import {dummyMessages} from '../Constants';
import Voice from '@react-native-voice/voice';
const Home = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setrecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  const [results, setResults] = useState(true);

  useEffect(() => {
    //voice handler
    Voice.onSpeechStart = VoiceStartHandler;
    Voice.onSpeechEnd = VoiceEndHandler;
    Voice.onSpeechResults = VoiceResultHandler;
    Voice.onSpeechError = VoiceErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const Clear = () => {
    setMessages([]);
  };
  const stopSpeaking = () => {
    setSpeaking(false);
  };
  const VoiceStartHandler = e => {
    console.log('start handler');
  };
  const VoiceEndHandler = e => {
    setrecording(false);
    console.log('speech end handler');
  };
  const VoiceResultHandler = e => {
    setResults(e.value[0]);
    console.log('Voice handler', e);
  };
  const VoiceErrorHandler = e => {
    console.log('speech error handler', e);
  };
  const startRecording = async () => {
    try {
      setrecording(true);
      await Voice.start('en-GB');
    } catch (e) {
      console.log('error', e);
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop('en-GB');
      setrecording(false);
    } catch (e) {
      console.log('error', e);
    }
  };
  console.log(results);
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/bot.png')}
            style={{height: hp(15), width: hp(15)}}
          />
        </View>
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text
              style={{fontSize: wp(5)}}
              className="text-gray-700 font-semibold ml-1">
              Asssistant
            </Text>
            <View
              style={{height: hp(50)}}
              className="bg-neutral-300 rounded-3xl p-4">
              <ScrollView
                bounce={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.message.includes('https')) {
                      //ai image response
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="rounded-2xl p-2 flex bg-emerald-100 rounded-tl-none">
                            <Image
                              source={{uri: message?.message}}
                              className="rounded-2xl"
                              style={{width: wp(50), height: wp(50)}}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View
                            style={{width: wp(70)}}
                            className="bg-emerald-100 rounded-xl rounded-tl-none p-4">
                            <Text>{message.message}</Text>
                          </View>
                        </View>
                      );
                      // text response
                    }
                  } else {
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{width: wp(70)}}
                          className="bg-white rounded-xl rounded-tr-none p-4">
                          <Text className="text-right">{message.message}</Text>
                        </View>
                      </View>
                    );
                    //user response
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        {/* recording , speech and stop button */}
        <View className="justify-center flex items-center">
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              <Image
                className="rounded-full"
                source={require('../../assets/images/voiceLoading.gif')}
                style={{width: hp(10), height: hp(10)}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              {/* start recording */}
              <Image
                className="rounded-full"
                source={require('../../assets/images/recordingIcon.png')}
                style={{width: hp(10), height: hp(10)}}
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={Clear}
              className="bg-neutral-400 rounded-3xl p-2 absolute right-10">
              <Text className="text-red-400 font-semibold">Clear</Text>
            </TouchableOpacity>
          )}
          {/* start recording */}

          {speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              className="bg-red-400 rounded-3xl p-2 absolute left-10">
              <Text className="text-white font-semibold">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
