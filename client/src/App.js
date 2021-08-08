import Gallery from "./Gallery";
import CreateImg from "./CreateImg";
import InputSrc from "./InputSrc";
import React from "react";

function App() {
  return (
    <div className="app">
      <div className="app_item">
        <CreateImg />
        <InputSrc />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
