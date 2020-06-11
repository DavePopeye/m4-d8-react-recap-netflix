import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CommentList from "./CommentList";
class Details extends Component {
  state = {
    data: null,
    title: null,
    poster: null,
    comments: [],
  };

  fetchComments = async (movieID) => {
    const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
    const comments = await fetch(commentsUrl + movieID, {
      headers: new Headers({
        Authorization: "Basic dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==",
      }),
    }).then((resp) => resp.json());

    this.setState({ comments });
  };

  fetchData = (movieID) => {
    fetch("http://www.omdbapi.com/?apikey=85a2b045" + "&i=" + movieID)
      .then((response) => response.json())
      .then((responseObject) =>
        this.setState({
          data: responseObject,
          poster: responseObject.Poster,
          title: responseObject.Title,
        })
      );
  };

  componentDidMount() {
    this.fetchData(this.props.match.params.imdbID);
    this.fetchComments(this.props.match.params.imdbID);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={"auto"}>
            <Image src={this.state.poster} />
          </Col>
          <Col>
            <h1 style={{ color: "white" }}>{this.state.title}</h1>
            <h4 style={{ color: "white" }}>
              {this.state.data && this.state.data.Writer}
            </h4>
            <CommentList comments={this.state.comments} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Details;
