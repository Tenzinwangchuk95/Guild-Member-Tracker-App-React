

import React, { Component } from 'react'

export class Like extends Component{
    constructor(props){
        super(props)

        this.state = {
            likes: 0
        }
        // this.addLike = this.addLike.bind(this)

    }

    addLike = () => {
        let newState = this.state.likes + 1
        this.setState({ likes: newState })
        
    }

    render(){
        return(
            <button onClick={()=> this.addLike()}> Likes: {this.state.likes} </button>
        )
    }
}
export default Like