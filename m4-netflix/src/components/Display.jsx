import React from "react";
import {  Row } from "react-bootstrap";
import { withRouter }  from "react-router-dom"

class Display extends React.Component {

    
  render() {
  
    return (
      <>
        <div className="container-fluid">
          <Row>
            {this.props.selected.map((film, index) => {
              return (
                <div key={index} className="col-md-2 m-1">
                  <span class="text-truncate">{film.title}</span>
                  <img
                    onClick={() => this.props.history.push('./details/' + film.imdbID)}
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

export default withRouter(Display);

