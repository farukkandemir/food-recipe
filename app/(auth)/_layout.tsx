import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen name="login" options={{}} />
    //   <Stack.Screen
    //     name="register"
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    // </Stack>
    <>
      <StatusBar style="dark" />
      <Slot />
    </>
  );
};

export default AuthLayout;
