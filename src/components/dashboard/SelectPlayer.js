import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Navbar from "./Navbar";
export default function SelectPlayer() {
  const { fileId } = useParams();

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex flex-wrap">
          <Button
            as={Link}
            to={{ pathname: `/react-player/${fileId}` }}
            className="m-2"
          >
            React-player
          </Button>
          <Button
            as={Link}
            to={{ pathname: `/react-video-renderer/${fileId}` }}
            className="m-2"
          >
            React-video-renderer
          </Button>
          <Button
            as={Link}
            to={{ pathname: `/videojs/${fileId}` }}
            className="m-2"
          >
            Video.js
          </Button>
          <Button
            as={Link}
            to={{ pathname: `/zoomable-media/${fileId}` }}
            className="m-2"
          >
            Zoomable-media
          </Button>
        </div>
      </Container>
    </>
  );
}
