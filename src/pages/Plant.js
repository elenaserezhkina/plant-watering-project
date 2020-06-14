import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import { Actions } from "react-native-router-flux";
import PlantImage from "../components/PlantImage";
import AllPlants from "../AllPlants";

const Plant = ({ plantName }) => {
  const [similarPlants, setSimilarPlants] = useState([]);
  const [plant, setPlant] = useState(null);

  useEffect(
    function findPlant() {
      const requestedPlant = AllPlants.find(
        (plant) => plant.name.toLowerCase() === plantName.toLowerCase()
      );
      if (requestedPlant) {
        setPlant(requestedPlant);
      } else {
        findSimilarNames();
      }
    },
    [plantName]
  );
  function findSimilarNames() {
    let similarNames = AllPlants.filter(
      (plant) =>
        plant.name
          .toLowerCase()
          .startsWith(plantName.toLowerCase().slice(0, plantName.length - 2)) ||
        plant.name.toLowerCase().endsWith(plantName.toLowerCase().slice(2))
    );
    console.log(similarNames);
    setSimilarPlants(similarNames.slice(0, 3));
  }
  const goToPlant = (plantName) => {
    Actions.plant({ plantName });
  };

  return (
    <View style={styles.container}>
      {plant ? (
        <View style={styles.plantCard}>
          <View>
            <Text style={styles.header}>{plantName}</Text>
          </View>
          <View>
            <PlantImage img={plant.image} />
            <Button
              onPress={() => Alert.alert("Simple Button pressed")}
              title="Learn More"
              color="#3BBF8F"
              accessibilityLabel="Learn more about this plant"
            />
          </View>
          <View>
            <Text style={styles.text}>
              Your {plantName} should be watered {plant.watering}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.notFound}>
          <Text style={styles.text}>
            Plant not found. We dont have {plantName} yet in our base
          </Text>
          <Text>Maybe you were looking for</Text>
          <View style={styles.otherPlants}>
            {similarPlants.map((plant, index) => (
              <TouchableOpacity
                key={index}
                style={styles.submitButton}
                onPress={() => goToPlant(plant.name)}
              >
                <Text style={styles.submitButtonText}>{plant.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 15,
  },
  plantCard: {
    flexDirection: "column",
    alignItems: "center",
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
    alignItems: "center",
  },
  otherPlants: {},
  submitButton: {
    width: 260,
    backgroundColor: "#82D9B9",
    padding: 10,
    margin: 5,
    height: 50,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
export default Plant;
