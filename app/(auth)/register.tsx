import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDimensions } from "@/hooks/useDimensions";
import Checkbox from "expo-checkbox";
import CustomButton from "@/components/ui/CustomButton";
import { AntDesign } from "@expo/vector-icons";

const Register = () => {
  const { height, width } = useDimensions();

  const accountCreationFields = [
    {
      label: "Name",
      id: "name",
      placeholder: "Enter Name",
    },
    {
      label: "Email",
      id: "email",
      placeholder: "Enter Email",
    },
    {
      label: "Password",
      id: "password",
      placeholder: "Enter Password",
    },
    {
      label: "Confirm Password",
      id: "confirm-password",
      placeholder: "Re-enter Password",
    },
  ];

  const socialMedia = [
    {
      name: "google",
      color: "#FF3D00",
    },
    {
      name: "facebook-square",
      color: "#035B81",
    },
  ];

  return (
    <View
      style={{
        paddingHorizontal: width * 0.1,
        paddingVertical: height * 0.05,
      }}
    >
      <SafeAreaView style={{}}>
        <View
          style={{
            gap: height * 0.01,
          }}
        >
          <Text
            style={{
              fontSize: 38,
              fontWeight: "bold",
            }}
          >
            Create an account
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "gray",
            }}
          >
            Let's help you set up your account
            {"\n"}
            it won't take long
          </Text>
        </View>
        <View
          style={{
            gap: height * 0.025,
            marginVertical: height * 0.025,
          }}
        >
          {accountCreationFields.map((field) => (
            <View key={field.id} className="gap-2">
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {field.label}
              </Text>
              <TextInput
                placeholder={field.placeholder}
                placeholderTextColor="#A0A0A0"
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 20,
                  padding: 12,
                }}
                className="font-poppins"
              />
            </View>
          ))}
          <View className="flex-row gap-2 items-center">
            <Checkbox className="border-secondary-100 rounded-md" />
            <Text className="text-secondary-100 text-base font-poppinsSemiBold">
              I agree to the terms and conditions
            </Text>
          </View>
        </View>

        <View>
          <CustomButton
            buttonLabel="Create Account"
            onPress={() => {
              console.log("Create Account");
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: height * 0.025,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
          <Text
            style={{
              marginHorizontal: 10,
              color: "gray",
              fontSize: 18,
              fontFamily: "Poppins-SemiBold",
              textAlign: "center",
            }}
          >
            Or Sign up with
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {socialMedia.map((social) => (
            <Pressable
              key={social.name}
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <AntDesign
                name={social.name as any}
                size={24}
                color={social.color}
              />
            </Pressable>
          ))}
        </View>

        <View
          style={{
            alignSelf: "center",
            marginTop: height * 0.025,
          }}
        >
          <Text className="font-poppins">
            Already have an account?{" "}
            <Text className="text-secondary-100 font-poppinsSemiBold">
              Sign in
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;
