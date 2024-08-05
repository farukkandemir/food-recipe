import { Dimensions } from "react-native";

export const useDimensions = () => {
  const dimensions = Dimensions.get("window");

  return {
    width: dimensions.width,
    height: dimensions.height,
  };
};
