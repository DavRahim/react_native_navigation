// import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hone Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", {
            name: 'Rahim'
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default HomeScreen;
