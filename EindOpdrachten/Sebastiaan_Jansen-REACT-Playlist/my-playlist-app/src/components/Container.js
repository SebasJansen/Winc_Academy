import React from "react"
import Form from "./Form"
import SongList from "./SongList"

function Container() {
    return (
        <main className="container">
            <Form />
            <SongList />
        </main>
    )
}

export default Container