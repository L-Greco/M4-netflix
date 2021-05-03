import React from "react";
import { Card, Row } from "react-bootstrap";
import { Form, Button, FormControl, Spinner } from "react-bootstrap";
import MyCommentArea from "../components/MyCommentArea"




class Display extends React.Component {

  state = {
    query: "lord",
    queryError: "",
    selected: [],
    isLoading: false,
  };

  fectchData = async function () {
    this.setState({ isLoading: true });
    let endpoint = "http://www.omdbapi.com/?apikey=66d58891&";
    let query = this.state.query;
    let endpointQuery = "s=" + query.replace(" ", "%20");
    try {
      let response = await fetch(endpoint + endpointQuery);

      if (response.ok) {
        console.log("Response is ok!!");
        let data = await response.json();
        console.log(data);
        if (data.Search) {
          this.setState({ queryError: "" });
          this.setState({ selected: data.Search });
          console.log(this.state.selected);
          this.setState({ isLoading: false });
        } else {
          this.setState({ queryError: data.Error });
          this.setState({ isLoading: false });
          console.log(this.state.queryError);
        }
      } else {
        alert("Cant fetch the data!");
      }
    } catch (error) {
      alert(error);
    }

  }

  componentDidMount = async function () {
    this.fectchData()
    
  };

  componentDidUpdate = async (previousProps, previousState) => {
    

    if (previousState.query !== this.state.query) {
       
        this.fectchData()
    }
}




  load = this.props.loading
  render() {
    return (
      <>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
            className=" mr-sm-2"
          />
          {/* <Button type="button" onClick={(e) => this.loadMovies()}>
            {" "}
            Search{" "}
          </Button> */}
          {this.state.isLoading && (
            <div className="ml-2">
              <Spinner className="mx-1" animation="grow" variant="danger" />
              <Spinner className="mx-1" animation="grow" variant="danger" />
              <Spinner className="mx-1" animation="grow" variant="danger" />
            </div>
          )}
        </Form>
        <div className="container-fluid">
          <Row>
            {this.state.selected.map((film) => {
              return (
                <div key={film.imdbID} className="col-md-2 m-1">
                  <span class="text-truncate">{film.title}</span>
                  {!this.props.loading ?<img
                    height="250px"
                    alt={film.title}
                    className="d-block w-80"
                    src={film.Poster}
                  /> : <img
                  height="250px"
                  alt={film.title}
                  className="d-block w-80"
                  src={"https://via.placeholder.com/150"}
                /> }
                  <p>{film.Title}</p>
                  <MyCommentArea imbdID ={film.imdbID}/>
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

