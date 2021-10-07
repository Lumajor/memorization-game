import React from 'react';
import "../styles/Card.css"

function Card(props) {
    const { card: { id, text, image }, cardClicked } = props;

    return (
        <div className="figure-container"> 
            <figure className="picture-container">
                <img src={image} alt="Call of Duty Player" onClick={cardClicked} id={id}/>
                <figcaption>{text}</figcaption>
            </figure>
        </div>
    );
}

export default Card;