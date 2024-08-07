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
import { Link } from "expo-router";
import { type Href } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";

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
            <Text className="text-white text-opacity-60 text-center text-2xl font-poppinsSemiBold">
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
              <Text className="text-center text-gray-400 text-xl pt-[20px] font-poppins">
                Simple way to find Tasty Recipe
              </Text>
            </View>

            <View>
              <CustomButton
                buttonLabel="Start Cooking"
                onPress={() => {
                  router.push("/register");
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingPage;
