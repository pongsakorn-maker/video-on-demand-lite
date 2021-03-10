import React, { useState, useEffect } from "react";
import Navbar from "../dashboard/Navbar";
import { database } from "../../firebase";
import { useParams } from "react-router-dom";
import videojs from "video.js";
export default function VideoJs() {
  const { fileId } = useParams();
  var selected;
  const [url, setUrl] = useState("");
  async function GetFile() {
    const snapshot = database.files.doc(`${fileId}`);
    snapshot
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    selected = (await snapshot.get()).data();
    setUrl(selected.url);
  }
  useEffect(() => {
    GetFile();
  }, [fileId]);

  return (
    <>
      <Navbar />
      <video
        id="my-video"
        className="video-js vjs-big-play-centered"
        controls
        autoPlay
        preload="auto"
        data-setup="{}"
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
        src={url}
      >
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a
            href="https://videojs.com/html5-video-support/"
            rel="noreferrer"
            target="_blank"
          >
            supports HTML5 video
          </a>
        </p>
      </video>
    </>
  );
}
