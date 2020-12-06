import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😂": "Face with tears of joy",
  "😎": "Smiling face with sunglasses",
  "😍": "Smiling face with heart eyes",
  "🎁": "Wrapped gift",
  "😅": "Grinning face with sweat"
};

let emojiList = Object.keys(emojiDictionary);

export default function App() {
  // const [value, setValue] = useState("");
  const [emojiValue, setEmojiValue] = useState("");
  const emojiSearchHandler = (e) => {
    let userInput = e.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our dictionary";
    }
    setEmojiValue(meaning);
  };
  const emojiClickHandler = (item) => {
    let meaning = emojiDictionary[item];
    setEmojiValue(meaning);
  };
  return (
    <div className="App">
      <h1>Inside out</h1>
      <input type="text" onChange={emojiSearchHandler} />
      <h2>{emojiValue}</h2>
      <h3>Emojis we know</h3>
      {emojiList.map((item, index) => {
        return (
          <span
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
            key={index}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
