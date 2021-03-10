import React, { useState, useEffect } from "react";
import ReactPlayers from "react-player";
import Navbar from "../dashboard/Navbar";
import { database } from "../../firebase";
import { useParams } from "react-router-dom";
export default function ReactPlayer() {
  const { fileId } = useParams();
  var selected;
  const [url,setUrl] = useState("")
  async function GetFile() {
    const snapshot = database.files.doc(`${fileId}`)
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    selected = (await snapshot.get()).data()
    setUrl(selected.url)
  }
  useEffect(() => {
    GetFile();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="player-wrapper"
        style={{
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
        }}
      >
        <ReactPlayers
          playing
          controls
          className="react-player"
          url={url}
          width="720px"
          height="640px"
        />
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#181818",
          color: "#ffffff",
        }}
      >
        <h1>Video Id : {fileId}</h1>

      </div>
    </>
  );
}
