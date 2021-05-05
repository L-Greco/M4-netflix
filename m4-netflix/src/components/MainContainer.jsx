import React from "react";

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

export default MainContainer;
