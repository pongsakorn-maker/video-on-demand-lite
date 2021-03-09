import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function File({ file }) {
  return (
    <Link to={{ pathname: `/select/${file.id}`}} className="btn btn-outline-dark text-truncate w-100">
      <FontAwesomeIcon icon={faFileVideo} className="mr-2" />
      {file.name}
    </Link>
    // <a href={file.url} target="_blank" className="btn btn-outline-dark text-truncate w-100">
    //     <FontAwesomeIcon icon={faFile} className="mr-2"/>{file.name}
    // </a>
  );
}
