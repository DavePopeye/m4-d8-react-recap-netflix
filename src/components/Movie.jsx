import React from "react";
import { Col, Image } from "react-bootstrap";

function Movie(props) {
  console.log("movie", props.movie);
  return (
    <Col className="mb-2">
      <Image fluid src={props.movie.Poster} alt={props.movie.Title} />
    </Col>
  );
}

export default Movie;
