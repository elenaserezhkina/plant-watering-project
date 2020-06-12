import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import PlantImage from "../PlantImage";

const Plant = ({ plantName }) => {
  const [waterTimes, setWaterTimes] = useState(2);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{plantName}</Text>
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
      <View>
        <Text style={styles.text}>
          Your {plantName} should be watered {waterTimes} x week
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  text: {
    color: "#4f603c",
  },
  header: {
    fontSize: 22,
    color: "#3BBF8F",
    textAlign: "center",
    margin: 15,
  },
});
export default Plant;
