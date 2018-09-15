import React from 'react'


const Actor = ({id, src}) => (
    <div className="actor" id={id}>
        <img className="actorImg" src={src} />
    </div>
)

export default Actor
