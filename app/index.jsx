import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Image
        source={require("../assets/images/png.jpg")}
        style={styles.profile}
      />
      <Text style={[styles.title, isDark && styles.textDark]}>
        Natdanai Pakpoom
      </Text>
      <Text style={[styles.subtitle, isDark && styles.textDark]}>
        Computer and Information Science
      </Text>
      <Text style={[styles.text, isDark && styles.textDark]}>
        Khon Kaen University
      </Text>
      <Text style={[styles.text, isDark && styles.textDark]}>
        Student Id: 653450088-3
      </Text>

 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e0e0e0",
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#4A90E2",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },
  textDark: {
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 30,
    width: "80%",
  },
});

export default Home;
