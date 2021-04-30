import React from "react"
import Search from "./Search"
import MyCommentArea from "../components/MyCommentArea"

class MainContainer extends React.Component {

    state = {

        show: false
    }
    
    render() {

        return (<>
            <div className="container-fluid">
                
                <h2>Harry Potter</h2>
                <div className=" row firstRow">
                    {

                        this.props.films.map(film => {

                            return (<div key={film.imdbID} onClick={() => {this.state.show ? this.setState({show: false}) : this.setState({show: true})}} className="col-md-2" style={{display: "inline"}}>
                                <span class="text-truncate">{film.name}</span>
                                <img 
                                
                                height="250px" class="d-block w-80" src={film.Poster} />
                                <p></p>
                                {this.state.show && <MyCommentArea/>}
                            </div>)

                        })
                    }
                </div>

            </div>

        </>)


    }
}

export default MainContainer