import React, { Component } from "react";
import News from "./components/news/News";
import Stocks from "./components/stocks/stocks";
import Particles from "react-particles-js";
//import Game from "react-dinosaur-game";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="row"
          style={{ height: "100%", backgroundColor: "#36454f" }}
        >
          <Particles
            params={{
              particles: {
                number: {
                  value: 100
                },
                size: {
                  value: 3
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
            style={{
              height: "100%",
              position: "absolute",
              top: "0px",
              backgroundColor: "#36454f"
            }}
          />
          <div className="col-" style={{ overflow: "auto", height: "100%" }}>
            <News />
          </div>
          <div className="col-lg" />
          <div className="col-" style={{ overflow: "auto", height: "100%" }}>
            <Stocks />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
