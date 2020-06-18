import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { Actions } from "react-native-router-flux";
import Input from "../components/Input";

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  const goToPlant = (plantName) => {
    Actions.plant({ plantName });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>How often should I water my plants?</Text>
      </View>
      <View>
        <Input onPress={goToPlant} />
      </View>
      <Image
        source={require("../img/heart.png")}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          padding: 20,
        }}
      >
        <TouchableOpacity style={{ margin: 21 }} onPress={goToAbout}>
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
    margin: 15,
  },
  header: {
    fontSize: 22,
    color: "#3BBF8F",
    textAlign: "center",
    margin: 15,
  },
  text: {
    color: "#4f603c",
  },
});
export default Home;
