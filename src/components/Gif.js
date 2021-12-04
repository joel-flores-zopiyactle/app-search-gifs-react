import React from 'react'


export default function Gif({title, id, url}) {
    return (
        <div>
            <h3>{ title }</h3>
            <p>{id}</p>
            <img src={url} className="App-logo" alt={title} /> 
        </div>
    )
}