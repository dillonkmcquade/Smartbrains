import React, { Component } from "react";
//import FaceRecognition from '../components/FaceRecognition';
import ImageLinkForm from "../components/ImageLinkForm";
import Navigation from "../components/Navigation";
import Rank from "../components/Rank";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "./particles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        
        <Rank />
        <ImageLinkForm />

        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
