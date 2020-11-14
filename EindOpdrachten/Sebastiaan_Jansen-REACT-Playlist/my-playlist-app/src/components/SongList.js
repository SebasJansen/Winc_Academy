import React, { Component } from "react"

class SongList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            loading: false,
            songs: [props]
        }
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
                console.log(this.state.songs);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    render() {
        const {error, loading, songs} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (loading) {
            return <div>Loading ...</div>
        }else{
            return (
                <section className={"listContainer"}>
                    <table id={"songsTable"}>
                        <tbody>
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Genre</th>
                                <th>Rating</th>
                            </tr>
                            {songs.map(song => (
                                <tr key={song._id} className="tableItems">
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.rating}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </section>
            )
        }
    }
}

export default SongList