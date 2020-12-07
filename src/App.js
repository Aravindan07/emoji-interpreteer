import React, { useState } from "react";
import "./App.css";
import { flagEmojis } from "./constants";

let emojiList = Object.keys(flagEmojis);

export default function App() {
  // const [value, setValue] = useState("");
  const [emojiValue, setEmojiValue] = useState("");
  const emojiSearchHandler = (e) => {
    let userInput = e.target.value;
    let meaning = flagEmojis[userInput];
    setEmojiValue(meaning);
  };
  const emojiClickHandler = (item) => {
    let meaning = flagEmojis[item];
    setEmojiValue(meaning);
  };
  return (
    <div className="wrapper">
      <h1>Transportation & Places Interpreter</h1>
      <div className="input-wrap">
        <input
          type="text"
          name=""
          id=""
          onChange={emojiSearchHandler}
          placeholder="Enter an emoji"
        />
        <div className="input-wrap output">
          {emojiValue === "" || emojiValue === undefined
            ? "Your output will be showed here"
            : emojiValue}
        </div>
        OR
        <p> Click on any emoji from below </p>
        <div className="show-emojis">
          {emojiList.map((item, index) => {
            return (
              <span
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  padding: "0.5rem",
                }}
                key={index}
                onClick={() => emojiClickHandler(item)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
