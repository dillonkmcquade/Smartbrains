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
import RingLoaderComponent from "../components/ringloader";
import { selectIsLoading } from "../Redux/food/food.selectors";
import { connect } from "react-redux";

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
    const { isLoading } = this.props;
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
              {isLoading ? <RingLoaderComponent /> : <IngredientList />}
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

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(App);
