import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, isDark && styles.containerDark]}>
        <Text style={[styles.title, isDark && styles.textDark]}>Contact Information</Text>

        <Text style={[styles.contactText, isDark && styles.textDark]}>Address: 220 Ban Nhong Dern Nong Khai 43000</Text>

        <Text style={[styles.contactText, isDark && styles.textDark]}>
          Email:
          <Text
            style={[styles.linkText, isDark && styles.linkDark]}
            onPress={() => Linking.openURL("mailto:asoog9966@gmail.com")}
          >
            asoog9966@gmail.com
          </Text>
        </Text>

        <Text style={[styles.contactText, isDark && styles.textDark]}>Phone: +66 610482490</Text>

        <Text style={[styles.contactText, isDark && styles.textDark]}>
          GitHub:
          <Text
            style={[styles.linkText, isDark && styles.linkDark]}
            onPress={() => Linking.openURL("https://github.com/muffynx")}
          >
            https://github.com/muffynx
          </Text>
        </Text>
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
  contactText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 15,
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
  linkText: {
    color: "#4A90E2",
    textDecorationLine: "underline",
  },
  linkDark: {
    color: "#66aaff",
  },
});

export default Contact;