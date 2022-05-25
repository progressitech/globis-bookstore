import React from 'react'
import {GamesCard} from "./GamesCard"

export function Games() {

    const games = [
        {
            title: 'Destiny 2',
            genre: 'MMOFPS',
            releaseDate: '2016'
        },
        {
            title: 'One Step From Eden',
            genre: 'Action/Strategy',
            releaseDate: '2020'
        },
        {
            title: 'Smite',
            genre: 'MOBA',
            releaseDate: '2014'
        }
    ]

    return (
        <>
            <h1>Games</h1>
            {games.map(game => <GamesCard game={game} key={game.title}/> )}
        </>
    )
}