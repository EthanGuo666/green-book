import { Image } from "expo-image";
import { View, Text, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

const Explore = () => {
  return (
    <SafeAreaView className='flex-1 bg-myBackGround'>
      <View>
        <Text>{"Explore"}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
