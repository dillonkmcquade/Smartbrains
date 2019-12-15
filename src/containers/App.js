import React, { Component } from "react";
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
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const initialState = {
  input: "",
  ingredients: [],
  imgURL: "",
  route: "signin",
  loading: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: "",
    joined: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
      }
    });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ loading: true });
    this.setState({ imgURL: this.state.input });
    fetch("http://localhost:3000/imagedata", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(
        function(response) {
          const foodData = response.outputs[0].data.concepts;
          if (response.status.code === 10000) {
            return foodData;
          }
        },
        function(err) {
          console.log("error");
        }
      )
      .then(foodData => {
        this.setState({ ingredients: foodData });
        this.setState({ loading: false });
      })
      .catch(console.log);
  };

  onSignOut = () => {
    this.setState({ ingredients: [] });
    this.setState({ imgURL: "" });
  };

  onRouteChange = route => {
    this.setState({ route: route });
    this.onSignOut();
  };

  render() {
    const ingredientData = this.state.ingredients;
    const { onRouteChange, loadUser, onInputChange, onButtonSubmit } = this;
    const { imgURL, route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route === "home" ? (
          <div>
            <Navigation onRouteChange={onRouteChange} />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <ImageRecognition imageURL={imgURL} />
            <Scroll>
              {this.state.loading === true ? (
                <RingLoader
                  css={override}
                  sizeUnit={"px"}
                  size={150}
                  color={"#123abc"}
                  loading={this.state.loading}
                  className="pa3"
                />
              ) : (
                <IngredientList ingredients={ingredientData} />
              )}
            </Scroll>
          </div>
        ) : route === "signin" ? (
          <Signin
            onRouteChange={onRouteChange}
          />
        ) : (
          <Register onRouteChange={onRouteChange} loadUser={loadUser} />
        )}
      </div>
    );
  }
}
export default App;
