import React from 'react';
import './card.styles.css'

export const Card = props => {
    return (
        <div className="cardContainer">
            <img src={`https://robohash.org/${props.monster.id}.png?set=set2&size=180x180`} alt="" />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
