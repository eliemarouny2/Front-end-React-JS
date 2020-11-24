import React, {Component} from 'react'
import TodoDataService from './todoDataService.js'

class RestoComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos :
            [




            ]
        }
    }
       componentDidMount(){
TodoDataService.retrieveAllTodos()
        }
   
    render(){
        return (
            <div>
                <h1>
                    Restaurants Availables
                </h1>
            </div>
        )
    }
}