import React, { Component } from "react";
import SassComponent from "./ComponentStyling/SassComponent";
import CSSModule from "./ComponentStyling/CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        <CSSModule />
      </div>
    );
  }
}

export default App;
