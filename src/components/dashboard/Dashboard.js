import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import {useFolder} from '../../hook/useFolder'
export default function Dashboard() {
    const {folder} = useFolder("1i5yPxlSlqU1iDrfJurR")
    console.log(folder)
  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder}/>
      </Container>
    </>
  );
}
