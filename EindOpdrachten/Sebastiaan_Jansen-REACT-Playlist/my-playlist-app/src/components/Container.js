import React, { Component } from "react"
import Form from "./Form"
import SongList from "./SongList"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            songs: []
        }
    }
    render(){
        return (
            <main className="container">
                <Form />
                <SongList songs/>
            </main>
        )
    }
}

export default Container