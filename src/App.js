import React, { Component } from "react";
import "./App.css";
import News from "./components/news/News";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div className="col-" style={{ overflow: "auto", height: "100%" }}>
          <News />
        </div>
        <div className="col-lg">
          <h1>google page</h1>
        </div>
        <div className="col-sm">
          <h1>stocks</h1>
        </div>
      </div>
    );
  }
}

export default App;
