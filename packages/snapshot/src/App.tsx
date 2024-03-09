import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { ImageCard } from "./components/imageCard/ImageCard";
import "./app.scss";
// @ts-ignore
import sampleImage from "./assests/sampleImage2.webp";

function App() {
  const single = (
    <div className="popover__wrapper">
      <a href="#">
        <img
          alt="Joseph Francis Joey Tribbiani, Jr."
          src={sampleImage}
          height={200}
          width={300}
        />
      </a>
      <div className="popover__content">
        <p className="popover__message">Joseph Francis "Joey" Tribbiani, Jr.</p>
        <img
          alt="Joseph Francis Joey Tribbiani, Jr."
          src={sampleImage}
          height={300}
          width={400}
        />
      </div>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(10)].map(() => single)}
    </div>
  );
}

export default App;
