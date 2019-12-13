import React, { Component } from "react";
import Clarifai from "clarifai";
import ImageLinkForm from "../components/ImageLinkForm";
import Navigation from "../components/Navigation";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "./particles";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import IngredientList from "../components/IngredientList";
import ImageRecognition from "../components/ImageRecognition";
import Scroll from "../components/Scroll";

const app = new Clarifai.App({
  apiKey: "1d7d2ac1e9164b4c9828d5377acb43e4"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      ingredients: [],
      imgURL: "",
      route: "signin"
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
            const foodData = response.outputs[0].data.concepts;
            console.log(foodData);
            return foodData;
          },
          function(err) {
            console.log("error");
          }
        )
        .then(foodData => {
          this.setState({ ingredients: foodData });
        });
    }
  };
  onSignOut = () => {
    this.setState({ ingredients: [] });
    this.setState({imgURL: ''})
  };
  onRouteChange = route => {
    this.setState({ route: route });
    this.onSignOut();
  };

  render() {
    const ingredientData = this.state.ingredients;
    const { onRouteChange, onInputChange, onButtonSubmit } = this;
    const { imgURL, route } = this.state;
    return (
      <div className="App">
        {console.log(imgURL)}
        <Particles className="particles" params={particlesOptions} />
        {route === "home" ? (
          <div>
            <Navigation
              onRouteChange={onRouteChange}
              onSignOut={this.onSignOut}
            />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <ImageRecognition imageURL={imgURL} />
            <Scroll>
              <IngredientList ingredients={ingredientData} />
            </Scroll>
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={onRouteChange} />
        ) : (
          <Register onRouteChange={onRouteChange} />
        )}
      </div>
    );
  }
}
export default App;
