import React, { Component } from "react";
//import FaceRecognition from '../components/FaceRecognition';
//import ImageLinkForm from '../components/ImageLinkForm';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/*<ImageLinkForm />
        <FaceRecognition />*/}
      </div>  
    );
  }
}

export default App;
