import React from "react"



class MainContainer extends React.Component {

    state = {

        searchInput: ""

    }

    render() {

        return (<>
            <div className="container-fluid">

                <h2>Hello Kostas!</h2>
                <div className=" row firstRow">
                    {

                        this.props.films.map(film => {

                            return (<div key={film.imdbID} className="col-md-2 m-1" style={{display: "inline"}}>
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