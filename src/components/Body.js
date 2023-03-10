// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import StyledComponent from "./styledCOM";
import StyledDetails from "./StyledExplanation";

export default function Body() {
  const [nasaData, setNasaData] = useState({});
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const apiUrl = selectedDate
      ? `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=gcviZyGKcxUtYsCfdor1gxO5TVwxfZezb1MsdZvh`
      : "https://api.nasa.gov/planetary/apod?api_key=gcviZyGKcxUtYsCfdor1gxO5TVwxfZezb1MsdZvh";

    axios
      .get(apiUrl)
      .then((res) => {
        setNasaData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <div className="datePicker">
        <label htmlFor="date-picker">Choose a date: </label>
        <input type="date" id="date-picker" onChange={handleDateChange} />
      </div>
      <StyledComponent>
        <h1>Astrology Picture Of The Day! : {nasaData.title}</h1>
        <h2>{nasaData.date}</h2>
        <img alt="APOTD" className="nasa-image" src={nasaData.url} />
        <StyledDetails>
          <p className="nasa-explanation">{nasaData.explanation}</p>
        </StyledDetails>
        {nasaData.copyright ? (
          <h2> Author: {nasaData.copyright} </h2>
        ) : (
          <h2> Author: Unknown Author 😢</h2>
        )}{" "}
      </StyledComponent>
    </div>
  );
}
