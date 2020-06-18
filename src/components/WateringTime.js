import React, { Component, useState, useEffect } from "react";
import { Text } from "react-native";

const WateringTime = ({ plant, style }) => {
  const [wateringTime, setWateringTime] = useState("");

  useEffect(
    function findWateringTime() {
      let wateringArray = plant.watering;
      if (wateringArray.length === 1) {
        setWateringTime(`once every ${wateringArray[0]} days`);
      } else {
        setWateringTime(
          `once every ${wateringArray[0]} to ${wateringArray[1]} days`
        );
      }
    },
    [plant]
  );

  return (
    <Text style={style}>
      Your {plant.name} should be watered {wateringTime}
    </Text>
  );
};
export default WateringTime;
