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
  route: "signin",
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

  onSignOut = () => {
    this.setState({ foodData: "", imgUrl: "" });
  };

  onRouteChange = route => {
    this.setState({ route: route });
    this.onSignOut();
  };

  render() {
    const ingredientData = this.state.ingredients;
    const { onRouteChange, loadUser } = this;
    const { route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route === "home" ? (
          <div>
            <Navigation onRouteChange={onRouteChange} />
            <ImageLinkForm />
            <ImageRecognition />
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
          <Signin onRouteChange={onRouteChange} />
        ) : (
          <Register onRouteChange={onRouteChange} loadUser={loadUser} />
        )}
      </div>
    );
  }
}

export default App;
