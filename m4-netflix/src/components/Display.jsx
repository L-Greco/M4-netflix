import React from "react";
import { Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

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
                      onClick={() =>
                        this.props.history.push("/showDetail/" + film.imdbID)
                      }
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

//export default withRouter(Display);
export default withRouter(Display);
