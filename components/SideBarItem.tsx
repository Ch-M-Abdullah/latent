import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PlatformPressable } from "@react-navigation/elements";
import { Href, router } from "expo-router";
import React, { Dispatch } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

type sideBarComponentProps = {
  text: string;
  link: Href;
  icon: keyof typeof MaterialIcons.glyphMap;
  setIsSideBarOpen: Dispatch<React.SetStateAction<boolean>>
};

export default function SideBarItem({
  text,
  link,
  icon,
  setIsSideBarOpen
}: sideBarComponentProps) {
  const colorScheme = useColorScheme();

  const buttonPressed = () => {
	router.push(link);
	setIsSideBarOpen(false);
  }

  return (
    <View
      style={{
        width: "100%",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <PlatformPressable
        onPress={buttonPressed}
        pressColor={
          colorScheme === "light" ? Colors.light.tint : Colors.dark.tint
        }
        style={{
          backgroundColor:
            colorScheme === "light"
              ? Colors.light.background
              : Colors.dark.background,
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: "2%",
          paddingHorizontal: "2%",
        }}
      >
        <MaterialIcons
          size={18}
          name={icon}
          style={{
            color:
              colorScheme === "light" ? Colors.light.text : Colors.dark.text,
            marginHorizontal: "2%",
          }}
        />
        <Text
          style={{
            color:
              colorScheme === "light" ? Colors.light.text : Colors.dark.text,
            fontSize: 18,
            textAlignVertical: "center",
          }}
        >
          {text}
        </Text>
      </PlatformPressable>
    </View>
  );
}

const styles = StyleSheet.create({});
