import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { Actions, POP_AND_PUSH } from "react-native-router-flux";
import BouncingPreloader from "react-native-bouncing-preloader";
import Modal from "react-native-modal";
import PlantImage from "../components/PlantImage";
import WateringTime from "../components/WateringTime";

const Plant = ({ plantName }) => {
  const [similarPlants, setSimilarPlants] = useState([]);
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(
    function findPlant() {
      fetch(`https://plant-watering.herokuapp.com/plants/?name=${plantName}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.result.length) {
            if (
              responseJson.result[0].name.toLowerCase() ===
              plantName.toLowerCase()
            ) {
              setPlant(responseJson.result[0]);
            } else {
              setSimilarPlants(responseJson.result.slice(0, 3));
            }
          }
          setTimeout(() => setLoading(false), 2000);
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
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <BouncingPreloader
            icons={[
              require("../img/watering-can.png"),
              require("../img/cactus.png"),
            ]}
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

            <View>
              <Button
                onPress={toggleModal}
                title="Interesting fact"
                color="#82D9B9"
              />
              <Modal
                style={styles.modal}
                isVisible={isModalVisible}
                onBackdropPress={() => setIsModalVisible(false)}
                onSwipeComplete={() => setIsModalVisible(false)}
                swipeDirection="left"
              >
                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                  <View style={styles.modalView}>
                    <Image
                      source={require("../img/planet-earth.png")}
                      style={{
                        width: 200,
                        height: 200,
                        alignSelf: "center",
                      }}
                    />
                    <Text style={styles.text}>{plant.interestingFact}</Text>
                  </View>
                </TouchableOpacity>
              </Modal>
            </View>
          </View>
          <View>
            <WateringTime style={styles.text} plant={plant} />
          </View>
        </View>
      ) : (
        <View style={styles.notFound}>
          <Text style={styles.header}>
            Plant not found. We don't have {plantName} yet in our base
          </Text>
          {similarPlants.length ? (
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
          ) : (
            []
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
  modal: {
    backgroundColor: "#82D9B9",
  },
  modalView: {
    backgroundColor: "white",
  },
});
export default Plant;
