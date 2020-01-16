import React, { Component } from "react";
import ImageLinkForm from "../components/image-link-form/ImageLinkForm";
import Navigation from "../components/Navigation";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "../components/particles";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import IngredientList from "../components/IngredientList";
import ImageRecognition from "../components/ImageRecognition";
import Scroll from "../components/Scroll";
import RingLoaderComponent from "../components/ringloader";
import {
  updateImageUrl,
  fetchFoodDataSuccess
} from "../Redux/food/food.actions";
import { selectIsLoading } from "../Redux/food/food.selectors";
import { connect } from "react-redux";
import Logo from "../components/logo/Logo";

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

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    const { isLoading } = this.props;
    const { onRouteChange, loadUser } = this;
    const { route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Logo />
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

const mapDispatchToProps = dispatch => ({
  updateImageUrl: url => dispatch(updateImageUrl(url)),
  fetchFoodDataSuccess: input => dispatch(fetchFoodDataSuccess(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
