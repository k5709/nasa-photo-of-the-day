import React from 'react'

export default function Body(props) {
    const { nasaData } = props;

    return (
        <div>

            <h1>
                Astrology Picture Of The Day! : {nasaData.title}
            </h1>
            <h2>{nasaData.date}</h2>
            <img alt='APOTD' src={nasaData.url} />
            <p>{nasaData.explanation}</p>
            <p>{nasaData.copyright}</p>
        </div>
    )
}
