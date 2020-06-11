import React from "react";
import { Col, Image, Modal, Button } from "react-bootstrap";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
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
    return (
      <Col className="mb-2">
        <Image
          fluid
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
          onClick={() => this.handleClick(this.props.movie.imdbID)}
        />
        <Modal show={this.state.isModalVisible} onHide={this.handleClick}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.comments.length > 0 && (
              <CommentList comments={this.props.comments} />
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
