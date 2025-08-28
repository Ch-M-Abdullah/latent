import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { ScrollView, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colorScheme === "light" ? Colors.light.background : Colors.dark.background }}>
      <Calendar onDayPress={(day) => console.log("Day: ", day)} />
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
