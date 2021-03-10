import React, { useRef, useState, useEffect } from "react";
import { ZoomableVideo, Zoomable } from "react-zoomable-media";
import { useParams } from "react-router-dom";
import { database } from "../../firebase";
import Navbar from "../dashboard/Navbar";
const Video = ({
  videoRef,
  isPlay,
  togglePlay,
  url,
}: {
  url: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlay: boolean;
  togglePlay: () => void;
}) => {
  return (
    <div
      style={{
        width: 1280,
        height: 720,
        backgroundColor: "#000000",
      }}
    >
      <ZoomableVideo
        render={({ onMediaReady }) => {
          return (
            <video
              autoPlay
              controls
              onLoadedMetadata={() => onMediaReady(videoRef)}
              style={{
                height: "100%",
                width: "100%",
              }}
              ref={videoRef}
              src={url}
            />
          );
        }}
      ></ZoomableVideo>
    </div>
  );
};
export default function ZoomableMedia() {
  const fileId: { [key: string]: string; } = useParams();
  var selected;
  const [url, setUrl] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    const video = videoRef.current as HTMLVideoElement;
    setIsPlay(!isPlay);
    if (isPlay) {
      video.pause();
    } else {
      video.play();
    }
  };
  
  async function GetFile() {
    var selectedfile = fileId.fileId
    const snapshot = database.files.doc(`${selectedfile}`);
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
    setUrl(selected?.url);
  }
  useEffect(() => {
    GetFile();
  }, [fileId]);
  return (
    <>
      <Navbar />
      <Zoomable
        enable
        maxZoom={4}
        moveStep={50}
        wheelZoomRatio={0.1}
        zoomStep={10}
      >
        <div
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
            isPlay={isPlay}
            togglePlay={togglePlay}
            videoRef={videoRef}
            url={url}
          />
        </div>
      </Zoomable>
      <h1 style={{color:"#ffffff"}}>Video Id : {fileId.fileId}</h1>
    </>
  );
}
