import React from "react";
import { Row } from "react-bootstrap";
import Movie from "./Movie";

function Gallery(props) {
  // console.log(props);
  return (
    <div>
      <h4>{props.title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        {props.movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </Row>
    </div>
  );
}

export default Gallery;
