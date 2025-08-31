import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [bgColor, setBgColor] = useState(
    colorScheme === "light" ? Colors.light.background : Colors.dark.background
  );

  useEffect(() => {
    console.log("Color Scheme: ", colorScheme);
    setBgColor(
      colorScheme === "light" ? Colors.light.background : Colors.dark.background
    );
  }, [colorScheme]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === "light"
            ? Colors.light.background
            : Colors.dark.background,
      }}
    >
      <Calendar
        style={{
          backgroundColor: bgColor,
        }}
        markedDates={{
          "2025-8-28": { selected: true },
        }}
        onDayPress={(day) => console.log("Day: ", day)}
        theme={{
          backgroundColor: bgColor,
          calendarBackground: bgColor,
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: colorScheme === "light" ? Colors.light.tint : Colors.dark.tint,
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#6200EE",
          dayTextColor:
            colorScheme === "light" ? Colors.light.text : Colors.dark.text,
          textDisabledColor:
            colorScheme === "light"
              ? Colors.light.tabIconDefault
              : Colors.dark.tabIconDefault,
          arrowColor: "#6200EE",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "500",
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
