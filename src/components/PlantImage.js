import React, { Component } from "react";
import { Image } from "react-native";

const PlantImage = ({ img }) => (
  <Image source={img} style={{ width: 200, height: 200 }} />
);
export default PlantImage;
