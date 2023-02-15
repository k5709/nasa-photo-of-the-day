import React, { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Body from "./components/Body";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=gcviZyGKcxUtYsCfdor1gxO5TVwxfZezb1MsdZvh"
      )
      .then((res) => {
        // console.log(res);
        setNasaData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Body nasaData={nasaData} />
      <footer className="connect-footer">
        <h2>Visit or Connect with me!</h2>
        <button className="footer-buttons" id="github">
          My GitHub!
        </button>
        <button className="footer-buttons">My LinkedIn!</button>
        <button className="footer-buttons">My Email!</button>
      </footer>
    </div>
  );
}

export default App;
