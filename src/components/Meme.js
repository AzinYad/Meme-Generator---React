import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMem) => ({ ...prevMem, [name]: value }));
  }
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const info = await res.json();
      setAllMemeImages(info.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[random].url;

    setMeme((prevMemeState) => {
      return { ...prevMemeState, randomImage: url };
    });
  }
  return (
    <main className="main-sec">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
