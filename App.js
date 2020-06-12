import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Routes from "./src/Routes.js";

export default function App() {
  return <Routes />;
}

AppRegistry.registerComponent("App", () => App);
