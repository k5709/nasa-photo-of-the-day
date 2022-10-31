import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

import Body from "./components/Body";

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gcviZyGKcxUtYsCfdor1gxO5TVwxfZezb1MsdZvh')
    .then(res => {
      console.log(res);
      setNasaData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <Body nasaData={nasaData} />
    </div>
  );
}

export default App;
