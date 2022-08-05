import React from 'react'
import {AvengersCard} from "./AvengersCard"

export function Avengers() {

    const avengers = [
        {
            name: 'Iron Man',
            image: 'https:',
            info: 'A wealthy American business magnate, playboy, philanthropist, inventor and ingenious scientist, Anthony Edward Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction.'
        },
        {
            name: 'Hulk',
            image: 'https:',
            info: 'Following his accidental exposure to gamma rays while saving the life of Rick Jones during the detonation of an experimental bomb, Banner is physically transformed into the Hulk when subjected to emotional stress,.'
        },
        {
            name: 'Thor',
            image: 'https:',
            info: 'Thor Odinson or simply Thor, is a fictional character appearing in American comic books published by Marvel Comics. The character is based on the Norse deity of the same name, the Asgardian god of thunder whose. '
        },
        {
            name: 'Captain America',
            image: 'https:',
            info: 'Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the peak of human perfection by an experimental "super-soldier serum" after joining the military to aid the United States government\'s.'
        }
    ]

    return (
        <>
            {avengers.map(avenger => <AvengersCard avenger={avenger} key={avenger.name}/> )}
        </>
    )
}