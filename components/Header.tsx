import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import SideBar from "./SideBar";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const colorScheme = useColorScheme();
  const sidebarIconSize = 28; // This is stored in a variable because it needs to be used in multiple places(sidebar icon + placeholder view)
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          colorScheme === "light"
            ? Colors.light.background
            : Colors.dark.background,
      }}
    >
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Pressable
        onPress={() => setIsSideBarOpen(true)}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <MaterialIcons
          size={sidebarIconSize}
          name="menu"
          color={colorScheme === "light" ? Colors.light.text : Colors.dark.text}
        />
      </Pressable>
      <Text
        style={[
          styles.headerTitleText,
          {
            color:
              colorScheme === "light" ? Colors.light.text : Colors.dark.text,
            backgroundColor: "transparent",
            fontWeight: "bold",
          },
        ]}
      >
        {title}
      </Text>
      <View style={{ width: sidebarIconSize }}>
        {/*Do not remove this. This is just a placeholder so that the header text can stay in the center*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitleText: {
    paddingVertical: 10,
    fontSize: 22,
    flex: 1,
    textAlign: "center",
  },
});
