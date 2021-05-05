import React from "react"
import { ListGroup, Spinner } from "react-bootstrap"

class ShowDetails extends React.Component {

    state = {
        id: this.props.match.params.ID,
        filmDetails: {},
        comments: [],
        isLoading: false
    }

    componentDidMount = () => {


        this.loadDetails()
        this.loadComments()

    }

    loadDetails = async () => {
        this.setState({ isLoading: true })
        try {

            let response = await fetch("http://www.omdbapi.com/?apikey=211926e0&i=" + this.state.id)
            let details = await response.json()
            this.setState({ filmDetails: details })
            this.setState({ isLoading: false })
        } catch (error) {
            console.log(error.message)
        }
    }

    loadComments = async () => {

        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.id, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDk5OWIxZjBmYjAwMTVkOTE2ZmUiLCJpYXQiOjE2MTk3MDMzNTMsImV4cCI6MTYyMDkxMjk1M30.T78i8o1OCSa9MZ4T1PZgfZUpU25WIlnhXWypzXYfPQ0"
            }
        })
        let data = await response.json()
        console.log(data);
        this.setState({ comments: data })
    }




    render() {
        console.log(this.state.filmDetails)
        return (<>
            <div className="container">

                <h1>{this.props.title}</h1>
                {this.state.isLoading && <>
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="light" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="light" />
     
                </>}
                <div className="d-flex flex-column align-items-center">
                    <h3> {this.state.filmDetails.Title}  </h3>
                    <img src={this.state.filmDetails.Poster} />
                    <p >{this.state.filmDetails.Plot}</p>
                </div>
                <div>
                    <h5>Comments</h5>
                    <ListGroup>

                        {this.state.comments.map(comment => {
                            return <ListGroup.Item key={comment._id} className="text-dark">{comment.comment}</ListGroup.Item>
                        })}
                    </ListGroup>


                </div>

            </div>

        </>)
    }
}

export default ShowDetails