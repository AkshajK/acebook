import React, { useState } from "react";
import { get, post } from "../../utilities";
const NewMessage = (props) => {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          post("/api/newmessage", { content: userInput });
          setUserInput("");
        }}
      >
        Post
      </button>
    </div>
  );
};

export default NewMessage;
