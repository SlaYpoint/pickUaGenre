import "./styles.css";
import React, { useState } from "react";

const genreDb = {
  rock: [
    {
      name: "Layla",
      artist: "Eric Clapton",
      desc:
        'The title of "Layla" was inspired by the story of Layla and Majnun, which Clapton had been told by his friend Ian Dallas, who was in the process of converting to Islam.'
    },
    {
      name: "Smoke on the water",
      artist: "Deep Purple",
      desc:
        "Despite Smoke On The Water being incredibly successful the band had never expected it to be a hit and thus didn’t release it as a single until almost a year after its release in the album machine head."
    },
    {
      name: "Another Brick In The Wall",
      artist: "Pink Flyod",
      desc:
        "The most widely recognized and well know song ever, right up there with We Are The Champions, We Will Rock You, Stairway to Heaven, and other 70's classics."
    }
  ],
  pop: [
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      desc:
        'In "Shape of You," Ed Sheeran describes a relationship that begins at a bar and quickly leads to a bedroom.'
    },
    {
      name: "Dynamite",
      artist: "BTS",
      desc:
        "Song garnered the band their first Grammy nomination, for Best Pop Duo/Group Performance at 63rd Annual Grammy Awards, making them the first Korean pop act to be nominated for one."
    },
    {
      name: "Despacito",
      artist: "Luis Fonsi",
      desc:
        "Luis Fonsi's Despacito featuring Daddy Yankee is the most-viewed music video on YouTube. It was released in January 2017 and has more than 7.29 billion views."
    }
  ],
  indie: [
    {
      name: "Mango Showers",
      artist: "Mali",
      desc:
        'Maalavika Manoj a.k.a "Mali" is a Mumbai-based singer-songwriter whose songs evoke the spirit of classic pop from the 1970s, 1980s, and 1990s'
    },
    {
      name: "O Sanam",
      artist: "Lucky Ali",
      desc: "C'mon! Do you really need a description for this song?"
    },
    {
      name: "Find You",
      artist: "Pineaple Express",
      desc:
        "Pineapple Express are a progressive fusion band, cooked into a tasty concoction with Carnatic, Rock, Experimental, Electronic & Progressive elements."
    }
  ],
  fusion: [
    {
      name: "Afreen Afreen",
      artist: "Momina Mustehsan | Rahat Fateh Ali Khan",
      desc:
        "This is what you call a faithful remake of the original song by the same name sung by the maestro Nusret Fateh Ali Khan."
    },
    {
      name: "Madari",
      artist: "Vishal Dadlani | Sonu Kakkar",
      desc:
        "With a strong percussive arrangement, this song talks about how no situation in life is in our control and we can only play along with the almighty, i.e. the Madari."
    },
    {
      name: "Channa",
      artist: "Atif Aslam",
      desc:
        "‘Channa’ which means ‘Darling’, is a song that sees a progression of deep, almost heart tugging waves stringed by the Orchestra in Serbia that finds its calm in the ever present pulse that takes the song to its climactic transition into the world of disco funk – highlighting the sense of satisfaction felt in the state of true love."
    }
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
                  <small>by {song.artist}</small>
                </div>
                <br />
                <desc>
                  <small>
                    <em>{song.desc}</em>
                  </small>
                </desc>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
