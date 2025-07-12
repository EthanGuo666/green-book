import { View, Text, Pressable, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { register } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { refreshUser } = useGlobalContext();

  const handleSubmit = async () => {
    console.log("email:", email, "username:", username, "password:", password);
    try {
      setLoading(true);
      await register(email, password, username);
      setLoading(false);
      router.push("/");
      refreshUser();
    } catch (error) {
      console.error("Sign up failed:", error);
      // Optionally, you can show an alert or a toast message to the user
      alert("Sign up failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className='flex-1 bg-myBackGround'>
      <View className='flex-1 flex-col mx-2 items-center'>
        <Text className='text-2xl font-bold text-myGreen text-center mt-20'>
          Create a new account
        </Text>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          className='border border-gray-400 rounded-md p-2 mt-10 h-14 w-4/5'
        />
        <TextInput
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
          className='border border-gray-400 rounded-md p-2 mt-3 h-14 w-4/5'
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          className='border border-gray-400 rounded-md p-2 mt-3 h-14 w-4/5'
        />
        <Pressable
          className=' bg-green-500 border-gray-200 rounded-md p-2 mt-10 h-14 w-4/5 justify-center'
          onTouchEnd={handleSubmit}
        >
          <Text className='text-white text-center font-bold text-xl'>
            Submit
          </Text>
        </Pressable>
        <View className='flex-row justify-center p-4 w-full'>
          <Text className='text-center font-semibold text-sm'>
            Already had an account?
          </Text>
          <Link href='/Login' className='font-semibold text-sm text-green-500'>
            {" "}
            Login
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
