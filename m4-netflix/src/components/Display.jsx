import React from "react";
import { Card, Row } from "react-bootstrap";

class Display extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Row>
            {this.props.queryError && <h1>No film found!! </h1>}
            {this.props.selected.map((film) => {
              return (
                <div key={film.imdbID} className="col-md-2 m-1">
                  <span class="text-truncate">{film.title}</span>
                  <img
                    height="250px"
                    alt={film.title}
                    className="d-block w-80"
                    src={film.Poster}
                  />
                  <p></p>
                </div>
              );
            })}
          </Row>
        </div>
      </>
    );
  }
}

export default Display;
