import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import { Actions } from "react-native-router-flux";
import PlantImage from "../PlantImage";

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>How often should I water my plants?</Text>
      </View>
      <View>
        <PlantImage />
        <Button
          onPress={() => Alert.alert("Simple Button pressed")}
          title="Learn More"
          color="#3BBF8F"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View
        style={{
          padding: 20,
        }}
      >
        <TouchableOpacity style={{ margin: 12 }} onPress={goToAbout}>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Learn more about watering your plants
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  header: {
    fontSize: 20,
    color: "#3BBF8F",
    textAlign: "center",
    margin: 5,
  },
  text: {
    color: "#4f603c",
  },
});
export default Home;
