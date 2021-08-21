import React from 'react'

function Card({image,name,desc,price,misc}) {
    return (
        <div className="product flex">
            <div className="prod__img">
                <img src={image} alt="prodImage" />
                <div className="misc">{misc}</div>
            </div>
            <div className="prod__content">
                <h2>{name}</h2>
                <h4>{desc}</h4>
                <p>&#8377; {price}</p>
            </div>
        </div>
    )
}

export default Card;
