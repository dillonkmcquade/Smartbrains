import React, { Component } from "react";
import ImageLinkForm from "../components/ImageLinkForm";
import Navigation from "../components/Navigation";
import Rank from "../components/Rank";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "./particles";
import Clarifai from "clarifai";
import IngredientList from "../components/IngredientList";
import ImageRecognition from "../components/ImageRecognition";
import Scroll from '../components/Scroll';

const app = new Clarifai.App({
  apiKey: "1d7d2ac1e9164b4c9828d5377acb43e4"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      ingredients: [],
      imgURL: ""
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgURL: this.state.input });
    if (this.state.input === "") {
      alert("You must provide a valid URL");
    } else {
      app.models
        .predict(Clarifai.FOOD_MODEL, this.state.input)
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
    }
  };

  render() {
    const ingredientlist = this.state.ingredients;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        {/*<Rank ingredients={ingredientlist} />*/}
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <ImageRecognition imageURL={this.state.imgURL} />
        <Scroll>
          <IngredientList ingredients={ingredientlist} />
        </Scroll>
      </div>
    );
  }
}

export default App;
