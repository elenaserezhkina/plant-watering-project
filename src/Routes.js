import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Plant from "./pages/Plant.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="about" component={About} title="About" />
      <Scene key="plant" component={Plant} title="Plant" />
    </Scene>
  </Router>
);
export default Routes;
