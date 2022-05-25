import React from 'react'

export function GamesCard(props) {

    const {title, genre, releaseDate} = props.game

    return (
        <>
            <h2>{title}</h2>
            <p>is a {genre} that was released in {releaseDate}</p>
        </>
    )
}