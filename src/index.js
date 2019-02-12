import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Components.
import Icon from "./components/Icon";
import Requirements from "./components/Requirements";

function App() {
  return (
    <div className="App">
      <Requirements />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "3px solid black",
          minHeight: "200px",
          padding: "20px"
        }}
      >
        <div
          style={{
            border: "2px solid tomato",
            width: "40%"
          }}
        >
          <Icon color={"#F00"} />
          <Icon color={"#F0F"} />
          <Icon color={"#555"} />
        </div>
        <div
          style={{
            border: "2px solid tomato",
            width: "40%"
          }}
        >
          <Icon color={"#0F0"} />
          <Icon color={"#00F"} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
