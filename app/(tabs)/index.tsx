import React, { useState } from "react";
import { Image } from "expo-image";
import { View, Text, Platform, StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-myBackGround'>
      <View>
        <Text>{"Home"}</Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
