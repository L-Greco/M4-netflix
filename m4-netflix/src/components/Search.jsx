import React from "react";
import { Form, Button, FormControl, Spinner } from "react-bootstrap";
import Display from "./Display";
import MainContainer from "./MainContainer";
import harrypotter from "./harrypotter.json";

class Search extends React.Component {
  state = {
    query: "",
    queryError: "",
    selected: [],
    isLoading: false,
  };

  loadMovies = async function () {
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
  };

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
          <Button
            variant="danger"
            type="button"
            style={{ color: "white!important}" }}
            onClick={(e) => this.loadMovies()}
          >
            {" "}
            Search{" "}
          </Button>
          {this.state.isLoading && (
            <div className="ml-2">
              <Spinner className="mx-1" animation="grow" variant="danger" />
              <Spinner className="mx-1" animation="grow" variant="danger" />
              <Spinner className="mx-1" animation="grow" variant="danger" />
            </div>
          )}
        </Form>

        {!this.state.queryError && (
          <Display
            selected={this.state.selected.sort((a, b) => a.Year - b.Year)}
            queryError={this.state.queryError}
            loading = {this.state.isLoading}
            query = {this.state.query}
          />
        )}
        {this.state.queryError && <h1> {this.state.queryError}</h1>}
        {this.state.selected.length <= 0 && (
          <MainContainer films={harrypotter} />
        )}
      </>
    );
  }
}

export default Search;
