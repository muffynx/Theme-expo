
import { Tabs } from "expo-router";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
      <Ionicons
        name={isDark ? "sunny-outline" : "moon-outline"}
        size={24}
        color={isDark ? "#FFD700" : "#333"}
      />
    </TouchableOpacity>
  );
};

export default function Layout() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
     
        <View style={styles.header}>
          <ThemeToggle />
        </View>

        <Tabs>
          <Tabs.Screen name="index" options={{ title: "Profile" }} />
          <Tabs.Screen name="about" options={{ title: "About Me" }} />
          <Tabs.Screen name="contact" options={{ title: "Contact" }} />
        </Tabs>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
    backgroundColor: "transparent",
  },
  toggleButton: {
    padding: 5,
  },
});
