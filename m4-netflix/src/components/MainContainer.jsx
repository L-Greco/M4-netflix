import React from "react";
import { withRouter } from "react-router-dom";
class MainContainer extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <h2>Harry Potter</h2>
          <div className=" row firstRow">
            {this.props.films.map((film) => {
              return (
                <div
                  key={film.imdbID}
                  className="col-md-2"
                  style={{ display: "inline" }}
                >
                  <span className="text-truncate">{film.name}</span>
                  <img
                    height="250px"
                    className="d-block w-80"
                    src={film.Poster}
                    onClick={() =>
                      this.props.history.push("/showDetail/" + film.imdbID)
                    }
                  />
                  <p></p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MainContainer);
