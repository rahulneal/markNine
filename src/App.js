import React, { useState } from "react";
import "./styles.css";

const travellingDB = {
  udaipur: [
    {
      Name: " fatesagar",
      Place: " Lake "
    },
    {
      Name: "The pataio",
      Place: "Cafe"
    },
    {
      Name: "Turnel",
      Place: " Turnel"
    }
  ],
  mumbai: [
    {
      Name: " BandStand ",
      Place: " Hangout Space "
    },
    {
      Name: " Gate Way of India ",
      Place: " Monument "
    },
    {
      Name: " Marine Drive",
      Place: "Sidewalks"
    }
  ],

  delhi: [
    {
      Name: " JamaMasjid ",
      Place: " FoodParadise "
    },
    {
      Name: " INDIA GATE",
      Place: "Monument"
    },
    {
      Name: "National Park",
      Place: " Lake"
    }
  ]
};

const placeArray = Object.keys(travellingDB);

export default function App() {
  const [sPlace, sTab] = useState("mumbai");
  function onClickHandler(event) {
    let fresh = event.target.textContent;
    sTab(fresh);
  }
  return (
    <div className="App">
      <h1>
        <span aria-label="palce-emoji" role="img">
          🧭
        </span>{" "}
        TravelingPass
      </h1>
      <p>Best Place to visit! </p>
      <hr />

      <div className="plcaeButtons">
        {placeArray.map((fresh) => {
          return (
            <button key={fresh} onClick={onClickHandler}>
              {fresh}
            </button>
          );
        })}
      </div>
      <div className="freshPlace">
        <ul>
          {travellingDB[sPlace].map((stays) => {
            return (
              <li key={stays}>
                <div>{stays.Place}</div>
                <div>
                  <small>
                    <em>{stays.Name}</em>
                  </small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
