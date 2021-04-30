import React from "react"
import { ListGroup, Button } from "react-bootstrap"


class MyCommentList extends React.Component {

    state = {
        comments: []
    }

    // deleteComment = async (e) => {

    //     try {
    //         let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + e.target.id
    //             , {
    //                 method: "DELETE",

    //                 headers: {

    //                     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDk5OWIxZjBmYjAwMTVkOTE2ZmUiLCJpYXQiOjE2MTk3MDMzNTMsImV4cCI6MTYyMDkxMjk1M30.T78i8o1OCSa9MZ4T1PZgfZUpU25WIlnhXWypzXYfPQ0"
    //                 }
    //             })
    //         if (response.ok) {
    //             alert("comment successfully deleted")
    //             this.fetchComments()
    //         }
    //     }



    //     catch (error) {
    //         console.log(error.message)
    //     }


    // }

    // componentDidMount = () => {
    //     this.fetchComments()
    // }

    // fetchComments = async () => {

    //     try {
    //         let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
    //             headers: {
    //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDk5OWIxZjBmYjAwMTVkOTE2ZmUiLCJpYXQiOjE2MTk3MDMzNTMsImV4cCI6MTYyMDkxMjk1M30.T78i8o1OCSa9MZ4T1PZgfZUpU25WIlnhXWypzXYfPQ0"
    //             }
    //         })



    //         if (response.ok) {
    //             let data = await response.json()
    //             this.setState({ comments: data })
    //             console.log(this.state.comments)


    //         }


    //     }
    //     catch (error) {
    //         console.log(error.message)

    //     }


    // }

    render() {

        return <>
            <ListGroup>

                {
                    this.state.comments.map(comment => {

                        return <ListGroup.Item className="d-flex justify-content-between">comment: {comment.comment} rating: {comment.rate}<Button id={comment._id} onClick={this.deleteComment} size="sm" variant="danger">Delete</Button>{' '}</ListGroup.Item>

                    })

                }
            </ListGroup>
        </>

    }


}


export default MyCommentList
