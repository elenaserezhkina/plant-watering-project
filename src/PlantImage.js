import React, { Component } from "react";
import { Image } from "react-native";

const PlantImage = () => (
  <Image source={require("./img/1.jpg")} style={{ width: 200, height: 200 }} />
);
export default PlantImage;
