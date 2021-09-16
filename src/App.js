import React, { useState } from "react";
import "./styles.css";

const seriesData = {
  fiction: [
    {
      name: "Stranger Things",
      description:
        "Stranger Things is an American science fiction horror drama television series",
      rating: "imdb 8.8/10"
    },
    {
      name: "Black Mirror",
      description:
        "This sci-fi anthology series explores a twisted, high-tech near-future ",
      rating: "imdb 8.8/10"
    },
    {
      name: "The Walking Dead",
      description:
        "The Walking Dead is an American post-apocalyptic horror television series based on the comic book series",
      rating: "imdb 7.6/10"
    },
    {
      name: "The 100",
      description:
        "Desperately looking for a solution, the ark's leaders send 100 juvenile prisoners back to the planet to test its habitability.",
      rating: "imdb 7.6/10"
    }
  ],

  sitcom: [
    {
      name: "The Office",
      description:
        "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees",
      rating: "imdb 8.9/10"
    },
    {
      name: "Brooklyn 99",
      description:
        "Brooklyn Nine-Nine is an American police procedural comedy television series",
      rating: "imdb 8.4/10"
    },
    {
      name: "Friends",
      description:
        "Friends is an American situation comedy about six 20-30s-year old friends living in the New York City",
      rating: "imdb 8.1/10"
    },
    {
      name: "The Big Bang Theory",
      description:
        "The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny.",
      rating: "imdb 8.1/10"
    }
  ],

  drama: [
    {
      name: "Pretty Little Liars",
      description:
        "The series follows the lives of four teenage girls - Aria, Spencer, Hanna and Emily; four estranged friends whose darkest secrets are about to unravel.",
      rating: "imdb 7.4/10"
    },
    {
      name: "The Vampire Diaries",
      description:
        "The Vampire Diaries is an American supernatural teen drama television series developed by Kevin Williamson and Julie Plec",
      rating: "imdb 7.7/10"
    },
    {
      name: "Riverdale",
      description:
        "Riverdale is an American teen drama television series based on the characters of Archie Comics.",
      rating: "imdb 6.9/10"
    },
    {
      name: "Gossip Girl",
      description:
        "Gossip Girl is an American teen drama television series based on the novel series of the same name written by Cecily von Ziegesar.",
      rating: "imdb 7.4/10"
    }
  ],

  horror: [
    {
      name: "Haunting of Hill House",
      description:
        "The Haunting of Hill House is an American supernatural horror drama television series created and directed by Mike Flanagan",
      rating: "imdb 8.6/10"
    },
    {
      name: "Haunting of Bly Manor",
      description:
        "The Haunting of Bly Manor is an American drama-gothic romance streaming television series created by Mike Flanagan",
      rating: "imdb 7.4/10"
    },
    {
      name: "Chilling Adventures of Sabrina",
      description:
        "Chilling Adventures of Sabrina is an American supernatural horror streaming television series developed by Roberto Aguirre-Sacasa for Netflix",
      rating: "imdb 7.5/10"
    },
    {
      name: "Locke and Key",
      description:
        "Locke & Key is a 2020 American supernatural horror drama streaming television series developed by Carlton Cuse, Meredith Averill, and Aron Eli Coleite",
      rating: "imdb 7.4/10"
    }
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

var grayFont = {
  fontSize: "smaller",
  color: "gray",
  margin: "0.25rem 0"
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
                  <div style={grayFont}>{type.description}</div>
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
