import React from "react";
import StyledComponent from "./styledCOM";
import StyledDetails from "./StyledExplanation";

export default function Body(props) {
  const { nasaData } = props;

  return (
    <div>
      <StyledComponent>
        <h1>Astrology Picture Of The Day! : {nasaData.title}</h1>
        <h2>{nasaData.date}</h2>
        <img alt="APOTD" className="nasa-image" src={nasaData.url} />
        <StyledDetails>
          <p className="nasa-explanation">{nasaData.explanation}</p>
        </StyledDetails>
        <h2> Author: {nasaData.copyright}</h2>
      </StyledComponent>
    </div>
  );
}
