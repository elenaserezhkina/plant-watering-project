import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import PlantImage from "../components/PlantImage";
import AllPlants from "../AllPlants";

const Plant = ({ plantName }) => {
  const [waterTimes, setWaterTimes] = useState(2);
  const [plant, setPlant] = useState(null);

  useEffect(
    function findPlant() {
      const requestedPlant = AllPlants.find(
        (plant) => plant.name.toLowerCase() === plantName.toLowerCase()
      );
      if (requestedPlant) {
        setPlant(requestedPlant);
      }
    },
    [plantName]
  );

  return (
    <View>
      {plant ? (
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>{plantName}</Text>
          </View>
          <View>
            <PlantImage img={plant.image} />
            <Button
              onPress={() => Alert.alert("Simple Button pressed")}
              title="Learn More"
              color="#3BBF8F"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View>
            <Text style={styles.text}>
              Your {plantName} should be watered {plant.watering}
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.notFound}>
            Plant not found. We dont have {plantName} yet in our base
          </Text>
        </View>
      )}
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
    fontSize: 18,
    margin: 15,
    textAlign: "center",
  },
  header: {
    fontSize: 22,
    color: "#3BBF8F",
    textAlign: "center",
    margin: 15,
  },
  notFound: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
    color: "#590515",
  },
});
export default Plant;
