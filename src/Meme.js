import { useState } from "react";
import memesData from "./memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const [allMemeImages, setallMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          onChange={handleChange}
          className="form--input"
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          onChange={handleChange}
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
