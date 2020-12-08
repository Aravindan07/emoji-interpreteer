import React, { useState } from "react";
import "./App.css";
import { flagEmojis } from "./constants";

let emojiList = Object.keys(flagEmojis);

export default function App() {
  const [value, setValue] = useState("");
  const [emojiValue, setEmojiValue] = useState("");
  const emojiSearchHandler = (event) => {
    let userInput = event.target.value;
    setValue(userInput.trim());
    let meaning = flagEmojis[userInput.trim()];
    if (userInput.length <= 0 && emojiValue.length >= 0) {
      return setEmojiValue("Your output will be shown here");
    }
    if (meaning === undefined) {
      return setEmojiValue("We don't have this in our database");
    }
    setEmojiValue(meaning);
  };
  const emojiClickHandler = (item) => {
    let meaning = flagEmojis[item];
    setEmojiValue(meaning);
  };
  return (
    <div className="wrapper">
      <h1>Transport & most used emoji's Interpretor</h1>
      <div className="input-wrap">
        <input
          type="text"
          value={value}
          onChange={emojiSearchHandler}
          placeholder="Enter a emoji"
        />
        <div className="input-wrap output">
          {emojiValue === "" ? "Your output will be shown here" : emojiValue}
        </div>
        OR
        <p> Click on any emoji from below </p>
        <div className="show-emojis">
          {emojiList.map((item, index) => {
            return (
              <span key={index} onClick={() => emojiClickHandler(item)}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
