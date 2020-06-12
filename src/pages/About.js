import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import List from "../components/List";

const listItems = [
  {
    name: "Keep the soil around the roots of your plants evenly moist.",
    description:
      "Always water around the plant and distribute in the entire irrigation area. watering at only one root point leads to one-sided root growth and thereby to poorer nutrient absorption in the soil.",
  },
  {
    name:
      "Water slowly to prevent runoff and give water time to move deeper into the soil. ",
    description:
      "If water puddles on the surface before it is absorbed by the soil, start and stop your watering several times, as needed, to allow the water to soak in.",
  },
  {
    name: "Morning is the best time of the day to water your plants.",
    description:
      "Water droplets on leaves near soil encourage the growth of fungal diseases, such as late blight and powdery mildew. Watering before 10 a.m. gives the plants time to dry off their leaves, reducing the chance of disease transmission.",
  },
  {
    name: "Water deeply and less frequently.",
    description:
      "This will encourage plant roots to grow deeper to search for water, allowing them to survive periods of drought better.",
  },
];

const About = () => {
  //const goToHome = () => {
  //  Actions.home();
  //};
  return (
    // <TouchableOpacity style={{ margin: 128 }} onPress={goToHome}>
    <View
      style={{
        flexDirection: "column",
        padding: 20,
      }}
    >
      <Text>
        The frequency of watering your plants depends on the size and type of
        plant, size and type of pot, temperature, humidity, and rate of growth.
      </Text>
      <Text>
        That’s why we recommend monitoring your houseplants and water when they
        need it. The schedule is provided for example purposes only.
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "darkgreen",
        }}
      >
        Few watering tips
      </Text>
      <List listItems={listItems} />
    </View>
    //  </TouchableOpacity>
  );
};
export default About;
