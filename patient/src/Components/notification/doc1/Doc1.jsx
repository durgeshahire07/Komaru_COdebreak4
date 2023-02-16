import React from "react";
import "./Doc1.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { TbArrowsJoin } from "react-icons/tb";
const socket = io.connect("http://localhost:5000");
const Doc1 = () => {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const [allMessages, setAllMessages] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    setAllMessages((prev) => [...prev, message]);

    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setAllMessages((prev) => [...prev, data.message]);
    });
  }, [socket]);
  return (
    <div>
      <div className="chatheading">
        <h1 className="chatheadingtxt">Dr.Anil Aggrawal</h1>
        <div className="chattokenbars">
          <input
            className="form-control"
            placeholder="Enter Doctor's Password"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button className="chattokenbtn" onClick={joinRoom}>
            <TbArrowsJoin />
          </button>
        </div>
      </div>
      <hr />

      <div className="messagebox">
        {allMessages?.map((msg, i) => (
          <div key={i}>
            <span className="sent-message">{msg}</span>
          </div>
        ))}
      </div>

      <div className="chatinputbars">
        <input
          className="form-control"
          placeholder="Type a message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button className="chatinputbtn" onClick={sendMessage}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Doc1;
