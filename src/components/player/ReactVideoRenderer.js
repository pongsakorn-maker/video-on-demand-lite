import React, { useState, useEffect }  from "react";
import Video from "react-video-renderer";
import Navbar from "../dashboard/Navbar";
import { database } from "../../firebase";
import { useParams } from "react-router-dom";
export default function ReactVideoRenderer() {
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
        <Video 
        autoPlay
        controls
        src= {url}>
          {(video, state, actions) => (
            <div>
              {video}
              <div style={{color:"#ffffff"}}>
                {state.currentTime} / {state.duration} / {state.buffered}
              </div>
              <progress
                value={state.currentTime}
                max={state.duration}
                onChange={actions.navigate}
              />
              <progress
                value={state.volume}
                max={1}
                onChange={actions.setVolume}
              />
              <button onClick={actions.play}>Play</button>
              <button onClick={actions.pause}>Pause</button>
              <button onClick={actions.requestFullScreen}>Fullscreen</button>
            </div>
          )}
        </Video>
        <h1>Video Id : {fileId}</h1>
      </div>
    </>
  );
}
