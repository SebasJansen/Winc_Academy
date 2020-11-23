import React, { Component } from "react"

class SongList extends Component {
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete = (id) => {
        this.props.deleteSong(id)
    }
    render() {
        if(this.props.error){
            return <div>Error in loading</div>
        }else if (this.props.loading) {
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
                                <th>Delete?</th>
                            </tr>
                            {this.props.songs.map((song, index) => (
                                <tr key={index} className="tableItems">
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.rating}</td>
                                    <td><button className="btnDelete" onClick={() => this.handleDelete(song._id)}></button></td>
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