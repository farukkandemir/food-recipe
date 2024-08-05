import { useDimensions } from "@/hooks/useDimensions";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LandingPage = () => {
  const { height } = useDimensions();

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/landing.png")}
        className="w-full h-full object-cover"
      >
        <View className="flex-1 justify-between items-center">
          <View
            className="items-center gap-4"
            style={{
              paddingTop: height * 0.12,
            }}
          >
            <Image
              source={require("../assets/images/landing-logo.png")}
              className="w-24 h-24"
            />
            <Text className="text-white text-opacity-60 text-center text-2xl font-semibold">
              100K+ Premium Recipe
            </Text>
          </View>
          <View
            className="gap-20"
            style={{
              paddingBottom: height * 0.12,
            }}
          >
            <View className="">
              <Text className="text-7xl font-semibold text-center text-white">
                Get
              </Text>
              <Text className="text-7xl font-semibold text-center text-white">
                Inspired
              </Text>
              <Text className="text-center text-gray-400 text-2xl pt-[20px]">
                Simple way to find Tasty Recipe
              </Text>
            </View>
            <View className="w-72 self-center">
              <TouchableOpacity className="bg-primary-primary-100 rounded-lg p-3 flex-row items-center justify-center space-x-4">
                <Text className="text-white text-center text-xl">
                  Start Cooking
                </Text>
                <AntDesign name="arrowright" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingPage;
