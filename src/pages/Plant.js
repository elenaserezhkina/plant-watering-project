import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import { Actions, POP_AND_PUSH } from "react-native-router-flux";
import BouncingPreloader from "react-native-bouncing-preloader";
import PlantImage from "../components/PlantImage";
import WateringTime from "../components/WateringTime";
// import AllPlants from "../AllPlants";

const Plant = ({ plantName }) => {
  const [similarPlants, setSimilarPlants] = useState([]);
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    function findPlant() {
      fetch(`https://plant-watering.herokuapp.com/plants/?name=${plantName}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (
            responseJson.result.length &&
            responseJson.result[0].name.toLowerCase() ===
              plantName.toLowerCase()
          ) {
            setPlant(responseJson.result[0]);
          } else {
            setSimilarPlants(responseJson.result.slice(0, 3));
          }
          setTimeout(() => setLoading(false), 3000);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [plantName]
  );

  const goToPlant = (plantName) => {
    Actions.plant({ plantName });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <BouncingPreloader
            icons={[require("../img/watering-can.svg")]}
            speed={2000}
          />
        </View>
      ) : plant ? (
        <View style={styles.plantCard}>
          <View>
            <Text style={styles.header}>{plant.name}</Text>
          </View>
          <View>
            <PlantImage img={plant.image[0]} />
            <Button
              onPress={() => Alert.alert(plant.interestingFact)}
              title="Learn More"
              color="#3BBF8F"
              accessibilityLabel="Learn more about this plant"
            />
          </View>
          <View>
            <WateringTime style={styles.text} plant={plant} />
          </View>
        </View>
      ) : (
        <View style={styles.notFound}>
          <Text style={styles.header}>
            Plant not found. We dont have {plantName} yet in our base
          </Text>
          {similarPlants.length && (
            <>
              <Text style={styles.text}>Maybe you were looking for</Text>
              <View style={styles.otherPlants}>
                {similarPlants.map((plantMatch, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.submitButton}
                    onPress={() => goToPlant(plantMatch.name)}
                  >
                    <Text style={styles.submitButtonText}>
                      {plantMatch.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
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
  loading: {
    marginTop: 300,
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
