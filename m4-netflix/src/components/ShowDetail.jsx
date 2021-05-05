import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class ShowDetails extends Component {
  state = {
    movie: {},
    ratings: [],
  };
  async componentDidMount() {
    let movieId = this.props.match.params.imgId;
    let endpoint = "http://www.omdbapi.com/?apikey=66d58891&i=";
    try {
      let responce = await fetch(endpoint + movieId);
      if (responce.ok) {
        let data = await responce.json();
        console.log(data);
        console.log(data.Ratings);
        this.setState({ movie: data });
        this.setState({ ratings: data.Ratings });
      } else {
        alert(responce.status);
      }
    } catch (error) {
      alert(error);
    }
  }
  render() {
    return (
      <>
        <img src={this.state.movie.Poster} />
        <ListGroup>
          <ListGroup.Item style={{ color: "black" }}>
            Actors : {this.state.movie.Actors}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Awards : {this.state.movie.Awards}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            BoxOffice : {this.state.movie.BoxOffice}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Country : {this.state.movie.Country}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            DVD : {this.state.movie.DVD}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Director : {this.state.movie.Director}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Genre : {this.state.movie.Genre}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Language : {this.state.movie.Language}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Metascore : {this.state.movie.Metascore}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Plot : {this.state.movie.Plot}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Production : {this.state.movie.Production}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Rated : {this.state.movie.Rated}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Released : {this.state.movie.Released}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Runtime : {this.state.movie.Runtime}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Title : {this.state.movie.Title}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            Writer : {this.state.movie.Writer}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            imdbRating : {this.state.movie.imdbRating}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black" }}>
            imdbVotes : {this.state.movie.imdbVotes}
          </ListGroup.Item>
        </ListGroup>
        <h3> Ratings</h3>
        <ListGroup>
          {this.state.ratings.map((rate) => (
            <ListGroup.Item style={{ color: "black" }}>
              Source : {rate.Source}
              Value : {rate.Value}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default ShowDetails;
