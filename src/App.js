import "./styles.css";
import React, { useState } from "react";

const genreDb = {
  rock: [
    { name: "Layla", artist: "Eric Clapton" },
    { name: "Smoke on the water", artist: "Deep Purple" },
    { name: "Another Brick In The Wall", artist: "Pink Flyod" }
  ],
  pop: [
    { name: "Shape of You", artist: "Ed Sheeran" },
    { name: "Dynamite", artist: "BTS" },
    { name: "Despacito", artist: "Luis Fonsi" }
  ],
  indie: [
    { name: "Mango Showers", artist: "Mali" },
    { name: "O Sanam", artist: "Lucky Ali" },
    { name: "Find You", artist: "Pineaple Express" }
  ],
  fusion: [
    {
      name: "Afreen Afreen",
      artist: "Momina Mustehsan | Rahat Fateh Ali Khan"
    },
    { name: "Madari", artist: "Vishal Dadlani | Sonu Kakkar" },
    { name: "Channa", artist: "Atif Aslam" }
  ]
};

export default function App() {
  let [selectedGenre, setGenre] = useState("rock");

  const genrePicker = (genre) => setGenre(genre);

  return (
    <div className="App">
      <h1> 🎧 pick 'Ua' genre</h1>
      <p>Hit the genre and we show the best !</p>
      <div>
        {Object.keys(genreDb).map((genre, index) => (
          <button key={index} onClick={() => genrePicker(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul style={{ paddingInlineStart: 0 }}>
          {genreDb[selectedGenre].map((song, index) => (
            <li key={index}>
              {" "}
              <div>
                {song.name}
                <div>
                  <small>{song.artist}</small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
