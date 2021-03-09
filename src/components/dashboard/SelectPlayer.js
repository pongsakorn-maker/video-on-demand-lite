import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebase";
import { Button,Container } from "react-bootstrap";
import Navbar from "./Navbar";
export default function SelectPlayer() {
  const { fileId } = useParams();
  const [file, setFile] = useState();
  async function getFile() {
    console.log(fileId);
    const snapshot = await database.files.where("fileId", "==", `${fileId}`);
    console.log(snapshot);
    setFile(snapshot);
    console.log(file);
  }
  useEffect(() => {
    getFile();
  }, []);

  return (
    <>
      <Navbar />
      <Container fluid><div className="d-flex flex-wrap">
        <Button className="m-2">React-player</Button>
        <Button className="m-2">React-video-renderer</Button>
        <Button className="m-2">React-youtube</Button>
        <Button className="m-2">Video.js</Button>
        <Button className="m-2">Shaka-player</Button>
        <Button className="m-2">Zoomable-media</Button>
      </div></Container>
      
    </>
  );
}
