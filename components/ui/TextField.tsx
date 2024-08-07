import { View, Text } from "react-native";
import React from "react";

const TextField = () => {
  return (
    <View>
      <Text>TextField</Text>
    </View>
  );
};

export default TextField;

{
  /* <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name={
                  accountCreationfield.id as
                    | "name"
                    | "email"
                    | "password"
                    | "confirm-password"
                }
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    placeholder={accountCreationfield.placeholder}
                    // className="border-2 border-gray-300 p-4"
                  />
                )}
              /> */
}
