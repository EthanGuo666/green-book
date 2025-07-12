import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
  return (
    <SafeAreaView className='flex-1 bg-myBackGround'>
      <View className='flex-1 flex-col items-center'>
        <View className='flex-row gap-2 items-center justify-center'>
          <Text className='text-2xl font-bold'>{"Profile"}</Text>
        </View>
        <Link href='/Login' className='p-4 rounded-lg w-full'>
          <Text className='text-center font-semibold text-lg'>Login</Text>
        </Link>
        <Link href='/SignUp' className='p-4 rounded-lg w-full'>
          <Text className='text-center font-semibold text-lg'>Sign up</Text>
        </Link>
        <Link href='/Login' className='p-4 rounded-lg w-full'>
          <Text className='text-center font-semibold text-lg'>Logout</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default profile;
