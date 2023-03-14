import React, { useState, useEffect } from "react";
import { Link, Router, Redirect, useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Body from "./components/Body";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("title");

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
      <header className="connect-footer">
        <h2>Visit or Connect with me!</h2>
        <h3 className="footer-buttons">Email: r.kristian40@gmail.com</h3>
        <button
          className="footer-buttons"
          id="github"
          onClick={() => (window.location.href = `https://github.com/k5709`)}
        >
          My GitHub! 👩‍💻
        </button>
        <button
          className="footer-buttons"
          onClick={() =>
            (window.location.href = `https://www.linkedin.com/in/kristian-rosales/`)
          }
        >
          My LinkedIn! 😎
        </button>
      </header>
      <Body nasaData={nasaData} />
    </div>
  );
}

export default App;
