import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <SafeAreaView className='flex-1 bg-myBackGround'>
      <View className='flex-1 flex-col mx-2 items-center'>
        <Text className='text-2xl font-bold text-myGreen text-center mt-20'>
          Profile
        </Text>
        <TextInput
          placeholder='Email or username'
          value={email}
          onChangeText={setEmail}
          className='border border-gray-400 rounded-md p-2 mt-16 h-14 w-4/5'
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          className='border border-gray-400 rounded-md p-2 mt-3 h-14 w-4/5'
        />
        <Pressable
          className=' bg-green-500 border-gray-200 rounded-md p-2 mt-10 h-14 w-4/5 justify-center'
          onTouchEnd={handleLogin}
        >
          <Text className='text-white text-center font-bold text-xl'>
            Login
          </Text>
        </Pressable>
        <View className='flex-row justify-center p-4 w-full'>
          <Text className='text-center font-semibold text-sm'>
            Haven't got an account?
          </Text>
          <Link href='/SignUp' className='font-semibold text-sm text-green-500'>
            {" "}
            Register
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
