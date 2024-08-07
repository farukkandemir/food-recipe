import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { type Href } from "expo-router";

const CustomButton = ({
  buttonLabel,
  buttonColor,
  onPress,
}: {
  buttonLabel: string;
  buttonColor?: string;
  onPress: () => void;
}) => {
  return (
    <View className="w-full self-center">
      {/* <Link href={href as Href<string>} asChild> */}
      <TouchableOpacity
        className="bg-primary-primary-100 rounded-lg p-4 flex-row items-center justify-center space-x-4"
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text className="text-white text-center text-xl font-poppinsSemiBold">
          {buttonLabel}
        </Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
      {/* </Link> */}
    </View>
  );
};

export default CustomButton;
