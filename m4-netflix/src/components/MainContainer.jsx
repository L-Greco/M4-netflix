import React from "react"
import Search from "./Search"


class MainContainer extends React.Component {

    
    render() {

        return (<>
            <div className="container-fluid">
                
                <h2>Harry Potter</h2>
                <div className=" row firstRow">
                    {

                        this.props.films.map(film => {

                            return (<div key={film.imdbID} className="col-md-2" style={{display: "inline"}}>
                                <span class="text-truncate">{film.name}</span>
                                <img height="250px" class="d-block w-80" src={film.Poster} />
                                <p></p>
                            </div>)

                        })
                    }
                </div>

            </div>

        </>)


    }
}

export default MainContainer