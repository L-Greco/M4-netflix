import React from "react"
import Search from "./Search"
import MyCommentArea from "../components/MyCommentArea"
import { Card} from "react-bootstrap"
import { withRouter }  from "react-router-dom"

class MainContainer extends React.Component {

    state = {

        show: false,
        imdbID: ""
    }
    
    render() {

        return (<>
            <div className="container-fluid">
                
                <h2>Harry Potter</h2>
                <div style={{overflowX: "scroll"}} className="d-flex firstRow">
                    {

                        this.props.films.map((film, index) => {

                            return (
                                <Card.Body key={index}>
                                <div onClick={() => this.props.history.push('./details/' + film.imdbID)}
                                 className="col-md-2" style={{display: "inline"}}>
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

export default withRouter(MainContainer)