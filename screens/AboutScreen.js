import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
const AboutScreen = ({ route, navigation}) => {
  const { name } = route.params;


  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title="update the name" onPress={() => navigation.setParams({name: 'come on'})}/>
      <Button title="Go back with data" onPress={() => navigation.navigate("Home", {result: 'Data From about'})}/>
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

export default AboutScreen;
