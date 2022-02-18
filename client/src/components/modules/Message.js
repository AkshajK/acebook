import React from "react";

const Message = (props) => {
  return (
    <div>
      <b>{props.name + ": "}</b>
      {props.content}
    </div>
  );
};

export default Message;
