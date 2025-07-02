import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const profile = () => {
  return (
    <SafeAreaView className='flex-1 bg-myBackGround'>
      <View>
        <Text>{'Profile'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default profile;