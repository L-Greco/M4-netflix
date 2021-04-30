import React from "react"
import {Form,Button,FormControl} from "react-bootstrap"
import Display from "./Display"
import MainContainer from "./MainContainer"
import harrypotter from "./harrypotter.json"



class Search extends React.Component {
    state = {
        query:"" ,
        queryError:"",
        selected:[]
    }

    

        
    

     loadMovies = async function () {
          let endpoint = "http://www.omdbapi.com/?apikey=66d58891&"
          let query = this.state.query
          let endpointQuery = "s="+query.replace(" ","%20")
          try {
              let response = await fetch( endpoint+endpointQuery)
               if  (response.ok) {
                console.log("Response is ok!!")
                let data = await response.json()
                console.log(data)
                if (data.Search){
                    

                     this.setState({selected:data.Search})
                console.log(this.state.selected)
                } else { this.setState({queryError:data.Error}) 
                        console.log(this.state.queryError)
                }
               
               }else { alert("Cant fetch the data!")}
          } catch (error) {
              alert(error)
          }
        
    }

    render() {
 return <>

      
 
         <Form inline>
            <FormControl type="text" placeholder="Search" value={this.state.query} onChange={ e => this.setState({query: e.target.value})} className=" mr-sm-2" />
        <   Button type="button" onClick={ e => this.loadMovies()}> Search </Button>
         </Form>
         <Display selected={this.state.selected.sort((a,b)=>a.Year - b.Year)} queryError={this.state.queryError}/>

         {(this.state.selected.length <=0) && <MainContainer films={harrypotter}/>}
         
      </>
    }
}

export default Search