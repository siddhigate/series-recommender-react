import React, { useState } from "react";
import "./styles.css";

//data
const seriesData = {
  fiction: [
    { name: "Stranger Things", rating: "imdb 8.8/10" },
    { name: "Black Mirror", rating: "imdb 8.8/10" },
    { name: "The Walking Dead", rating: "imdb 7.6/10" },
    { name: "The 100", rating: "imdb 7.6/10" }
  ],

  sitcom: [
    { name: "The Office", rating: "imdb 8.9/10" },
    { name: "Brooklyn 99", rating: "imdb 8.4/10" },
    { name: "Friends", rating: "imdb 8.1/10" },
    { name: "The Big Bang Theory", rating: "imdb 8.1/10" }
  ],

  drama: [
    { name: "Pretty Little Liars", rating: "imdb 7.4/10" },
    { name: "The Vampire Diaries", rating: "imdb 7.7/10" },
    { name: "Riverdale", rating: "imdb 6.9/10" },
    { name: "Gossip Girl", rating: "imdb 7.4/10" }
  ],

  horror: [
    { name: "Haunting of Hill House", rating: "imdb 8.6/10" },
    { name: "Haunting of Bly Manor", rating: "imdb 7.4/10" },
    { name: "Chilling Adventures of Sabrina", rating: "imdb 7.5/10" },
    { name: "Locke and Key", rating: "imdb 7.4/10" }
  ]
};

//styles
var buttonStyle = {
  cursor: "pointer",
  background: "white",
  borderRadius: "0.5rem",
  padding: "0.5rem 1.2rem 0.5rem 1.2rem",
  // border: "2px solid #A78BFA",
  boxShadow: "0 1px 10px rgba(146,161,176,.15)",
  border: "none",
  marginLeft: "1rem",
  marginTop: "1rem"
};

var listStyle = {
  listStyle: "none",
  padding: "1rem",
  // border: "1px solid #D1D5DB",
  boxShadow: "0 1px 4px rgba(146,161,176,.15)",
  width: "80%",
  margin: "1rem 1rem",
  borderRadius: "0.5rem",
  background: "white"
};

var largeFont = {
  fontSize: "larger"
};

var smallFont = {
  fontSize: "smaller"
};

var navBrand = {
  textAlign: "left",
  fontSize: "1.25rem"
};

var footer = {
  backgroundColor: "#374151",
  color: "white",
  padding: "2.85rem",
  textAlign: "center",
  // maxWidth: "900px",
  borderTopRightRadius: "1rem",
  boxShadow: "0 1px 25px #E5E7EB",
  margin: "6rem auto 0rem auto"
};

const containerCenter = { "max-width": "500px", margin: "auto" };

export default function App() {
  const [selectedType, setType] = useState("fiction");

  function onClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <nav>
        <div style={navBrand}>seriesRecommender</div>
      </nav>

      <div style={containerCenter}>
        <h1 style={{ margin: "2rem " }}>What to watch?</h1>

        <div>
          {Object.keys(seriesData).map((type) => (
            <button style={buttonStyle} onClick={() => onClickHandler(type)}>
              <span>{type}</span>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {seriesData[selectedType].map((type) => (
              <li style={listStyle}>
                <div style={largeFont}>
                  {type.name}
                  <div style={smallFont}>{type.rating}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer style={footer}>
        "I need to stop" I whispered to myself as I clicked next episode.
      </footer>
    </div>
  );
}
