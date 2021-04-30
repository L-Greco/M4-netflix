import {  } from "react-bootstrap"
import React from "react"
import MyCommentList from "../components/MyCommentList"
// import MyAddComment from "./MyAddComment"

class MyCommentArea extends React.Component {

    state = {
        show: false
    }

    render() {

        return <div className="flex-column d-flex">

            
                   

            <MyCommentList />
            {/* <MyAddComment book={this.props.book} refresh={() => this.setState({})}/>
             */}
        </div>


    }

}


export default MyCommentArea

