import React from "react";
import { Col, Image, Modal, Button, Spinner } from "react-bootstrap";
import CommentList from "./CommentList";
class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  handleClick = (movieID) => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.fetchComments(movieID);
  };

  render() {
    const { comments, movie } = this.props;
    return (
      <Col className="mb-2">
        <Image
          fluid
          src={movie.Poster}
          alt={movie.Title}
          onClick={() => this.handleClick(movie.imdbID)}
        />
        <Modal show={this.state.isModalVisible} onHide={this.handleClick}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {comments.length > 0 ? (
              <CommentList comments={comments} />
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

export default Movie;
