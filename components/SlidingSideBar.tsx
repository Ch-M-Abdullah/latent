import { Colors } from "@/constants/Colors";
import React, { Dispatch, useEffect } from "react";
import { Dimensions, Pressable, useColorScheme, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const { width } = Dimensions.get("window");

type slidingSideBarProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function SlidingSideBar({
  isSideBarOpen,
  setIsSideBarOpen,
  children,
}: slidingSideBarProps) {
  const colorScheme = useColorScheme();
  const screenHeight = Dimensions.get("window").height;
  const left = useSharedValue(-width);

  const animatedStyle = useAnimatedStyle(() => ({
    left: left.value,
    backgroundColor: interpolateColor(
      left.value === 0 ? 1 : 0,
      [0, 1],
      ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]
    ),
  }));

  useEffect(() => {
    if (isSideBarOpen) {
      left.value = withTiming(0, { duration: 100 });
      console.log("Opening sidebar");
    } else {
      left.value = withTiming(-width, { duration: 100 });
      console.log("Closing sidebar");
    }
  }, [isSideBarOpen]);

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 0,
          height: screenHeight,
          width: width,
          backgroundColor: "black",
          zIndex: 1,
          flexDirection: "row",
        },
        animatedStyle,
      ]}
    >
      <View
        style={{
          flex: 3,
          paddingTop: 10,
          backgroundColor:
            colorScheme === "light"
              ? Colors.light.background
              : Colors.dark.background,
        }}
      >
        <>{children}</>
      </View>
      <Pressable
        onPress={() => setIsSideBarOpen(false)}
        style={{ flex: 1 }}
      ></Pressable>
    </Animated.View>
  );
}
