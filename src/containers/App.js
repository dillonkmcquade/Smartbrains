import React, { Component } from "react";
import ImageLinkForm from "../components/ImageLinkForm";
import Navigation from "../components/Navigation";
import Rank from "../components/Rank";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "./particles";
import Clarifai from "clarifai";
import IngredientList from "../components/IngredientList";

const app = new Clarifai.App({
  apiKey: "1d7d2ac1e9164b4c9828d5377acb43e4"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      ingredients: []
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    app.models
      .predict(
        "bd367be194cf45149e75f01d59f77ba7",
        "https://samples.clarifai.com/food.jpg"
      )
      .then(
        function(response) {
          const ingredientz = response.outputs[0].data.concepts;
          return ingredientz;
        },
        function(err) {
          console.log("error");
        }
      )
      .then(ingredientz => {
        this.setState({ ingredients: ingredientz });
      });
  };

  render() {
    const ingredientlist = this.state.ingredients;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <IngredientList ingredients={ingredientlist} />
      </div>
    );
  }
}

export default App;
