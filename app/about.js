import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, isDark && styles.containerDark]}>
        <Text style={[styles.title, isDark && styles.textDark]}>About Me</Text>
        <Text style={[styles.text, isDark && styles.textDark]}>Name: Natdanai Pakpoom</Text>
        <Text style={[styles.text, isDark && styles.textDark]}>Student Id: 653450088-3</Text>
        <Text style={[styles.text, isDark && styles.textDark]}>Khon Kaen University</Text>
        <Text style={[styles.text, isDark && styles.textDark]}>Computer and Information Science</Text>

        <Text style={[styles.subTitle, isDark && styles.textDark]}>Technical Skills</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsText}>Networking: OSI & TCP/IP Model...</Text>
          <Text style={styles.skillsText}>Cisco Networking: Cisco Routers & Switches...</Text>
          <Text style={styles.skillsText}>Tools: Wireshark, Packet Tracer...</Text>
          <Text style={styles.skillsText}>Programming: Python, PHP, HTML/CSS</Text>
          <Text style={styles.skillsText}>Operating Systems: Windows, Linux...</Text>
          <Text style={styles.skillsText}>Languages: English (B1 Level)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1, paddingBottom: 20 },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  containerDark: {
    backgroundColor: "#333333",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A90E2",
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
    marginVertical: 8,
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textDark: {
    color: "#fff",
  },
  skillsContainer: {
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  skillsText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    padding: 5,
    borderLeftWidth: 5,
    borderLeftColor: "#4A90E2",
    backgroundColor: "rgba(240, 240, 240, 0.7)",
    borderRadius: 8,
  },
});

export default About;