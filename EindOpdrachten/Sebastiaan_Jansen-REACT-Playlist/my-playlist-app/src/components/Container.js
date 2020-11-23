import React, { Component } from "react"
import FormComponent from "./FormComponent"
import SongList from "./SongList"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            songs: [],
            loading: false,
        }
        this.addSong = this.addSong.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://jsonbox.io/box_efb6f509b9be86982174")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    songs: data
                })
            },
            (error) => {
                this.setState({
                    loading: true,
                    error
                })
            },
        )
    }
    addSong = (song) => {
        fetch('https://jsonbox.io/box_efb6f509b9be86982174', {
            method: 'POST',
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(function(response) {
            console.log(`The response : ${response}`)
            return response.json()
        })
        this.setState((prevState) => {
            const newState = {...prevState};
            newState.songs = [...newState.songs, song];
            return newState;
        })
    }
    deleteSong = (id) => {
        console.log(id);
        if (id === undefined) {
            alert("cannot delete newly added song");
            return
        } else {
            const deleteUrl = (`https://jsonbox.io/box_efb6f509b9be86982174/${id}`);
            fetch(deleteUrl, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(function(response) {
                console.log(`The response : ${response}`)
                return response.json()
            })
            this.setState((prevState) => {
                const newState = {...prevState};
                newState.songs = newState.songs.filter(song => song._id !== id);
                return newState;
            })
        }
    }
    render() {
        return (
            <main className="container">
                <FormComponent addSong={this.addSong}/>
                <SongList error={this.state.error} loading={this.state.loading} songs={this.state.songs} deleteSong={this.deleteSong}/>
            </main>
        )
    }
}

export default Container