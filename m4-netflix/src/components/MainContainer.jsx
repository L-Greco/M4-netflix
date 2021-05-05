import React from "react"
import Search from "./Search"
import MyCommentArea from "../components/MyCommentArea"
import { Card} from "react-bootstrap"

class MainContainer extends React.Component {

    state = {

        show: false,
        imdbID: ""
    }
    
    render() {

        return (<>
            <div className="container-fluid">
                
                <h2>Harry Potter</h2>
                <div className=" row firstRow">
                    {

                        this.props.films.map(film => {

                            return (
                                <Card.Body key={film.imdbID}>
                                <div onClick={() => {this.state.show ? this.setState({show: false}) : this.setState({show: true})
                                this.setState({imdbID: film.imdbID})
                                }} className="col-md-2" style={{display: "inline"}}>
                                <span class="text-truncate">{film.name}</span>
                                <img 
                                
                                height="250px" class="d-block w-80" src={film.Poster} />
                                <p></p>
                                {this.state.show && <MyCommentArea imdbID={this.state.imdbID}/>}
                            </div>
                            </Card.Body>)

                        })
                    }
                </div>

            </div>

        </>)


    }
}

export default MainContainer