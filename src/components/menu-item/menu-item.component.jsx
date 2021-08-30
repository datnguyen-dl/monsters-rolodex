import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ name, id, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className="background-image"
            style={{
                backgroundImage: `url(https://robohash.org/${id}.png?set=set2&size=180x180)`
            }} />
        <div className="content">
            <h1 className="title">{name.toUpperCase()}</h1>

            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem