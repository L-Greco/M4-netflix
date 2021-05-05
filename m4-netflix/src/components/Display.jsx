import React from "react";
import { Card, Row } from "react-bootstrap";

class Display extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Row>
            {this.props.selected
              .filter((film) => film.Poster !== "N/A")
              .map((film) => {
                return (
                  <div key={film.imdbID} className="col-md-2 m-1">
                    {/* <span className="text-truncate">{film.Title}</span> */}
                    <img
                      height="250px"
                      style={{ maxWidth: "100%" }}
                      alt={film.Title}
                      className="d-block w-80"
                      src={film.Poster}
                    />
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
