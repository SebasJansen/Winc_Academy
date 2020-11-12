import React, { Component } from "react"
import SongList from "./SongList"

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = (event) => {
        fetch('https://jsonbox.io/box_efb6f509b9be86982174', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(function(response) {
            console.log(response)
            return response.json()
        })
        event.preventDefault()
    }
    render() {
        return (
            <section className="songForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title" 
                        value={this.state.title} 
                        onChange={this.handleChange} 
                        placeholder="Title"
                    />                
                    <input 
                        type="text"
                        name="artist" 
                        value={this.state.artist}
                        onChange={this.handleChange} 
                        placeholder="Artist"
                    />
                    <select 
                        value={this.state.genre} 
                        name="genre" 
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a genre --</option>
                        <option value="Blues">Blues</option>
                        <option value="Country">Country</option>
                        <option value="Electronic">Electronic</option>
                        <option value="House">House</option>
                        <option value="Hiphop">Hip Hop</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Metal">Metal</option>
                    </select>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={this.state.rating}
                        placeholder="Rating between 1 and 5"
                        onChange={this.handleChange}
                        min="1" max="5"
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </section>
        )
    }
}

export default FormComponent