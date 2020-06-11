import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Movie from "./Movie";

function Gallery({ title, movies, loading, comments, fetchComments }) {
  return (
    <div>
      <h4>{title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-6 row-cols-xl-6 mb-4 no-gutters text-center">
        {loading
          ? [0, 1, 2, 3, 4, 5].map((num, i) => (
              <Col key={i}>
                <Spinner animation="border" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            ))
          : movies.map((movie) => (
              <Movie
                movie={movie}
                key={movie.id}
                comments={comments}
                fetchComments={fetchComments}
              />
            ))}
        }
      </Row>
    </div>
  );
}

export default Gallery;
