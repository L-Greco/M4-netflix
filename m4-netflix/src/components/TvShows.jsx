import React from "react"

class TvShows extends React.Component {

    state = {
        
        shows: []
    }

    getSeries = async () => {

        try {

            let response = await fetch("")

            if (response.ok) {

                let data = await response.json()
                this.setState({ shows: data })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {


        return (
            <>

            </>
        )

    }
}

export default TvShows