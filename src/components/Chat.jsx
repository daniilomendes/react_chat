import React from "react";
import Messages from "./Messages";
import  Input  from "./Input";


const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Danilo</span>
        <div className="chatIcons">
          <img src="/cam.png" alt="" />
          <img src="/add.png" alt="" />
          <img src="/more.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
