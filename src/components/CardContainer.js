import React, { useState, useEffect } from "react";
import "../styles/CardContainer.css"
import Card from "./Card";
import uniqid from "uniqid";

//images
import abezy from "../images/abezy.png"
import bance from "../images/bance.png"
import censor from "../images/censor.png"
import crimsix from "../images/crimsix.png"
import clayster from "../images/clayster.png"
import dashy from "../images/dashy.png"
import drazah from "../images/drazah.png"
import envoy from "../images/envoy.png"
import gunless from "../images/gunless.png"
import huke from "../images/huke.png"
import kenny from "../images/kenny.png"
import scump from "../images/scump.png"

const CardContainer = (props) => {

    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [clickedCards, setClickedCards] = useState([])

    let cardInfo = [
        {
            id: uniqid(),
            text: "abezy",
            image: abezy
        },
        {
            id: uniqid(),
            text: "Bance",
            image: bance
        },
        {
            id: uniqid(),
            text: "Censor",
            image: censor
        },
        {
            id: uniqid(),
            text: "Crimsix",
            image: crimsix
        },
        {
            id: uniqid(),
            text: "Clayster",
            image: clayster
        },
        {
            id: uniqid(),
            text: "Dashy",
            image: dashy
        },
        {
            id: uniqid(),
            text: "Drazah",
            image: drazah
        },
        {
            id: uniqid(),
            text: "Envoy",
            image: envoy
        },
        {
            id: uniqid(),
            text: "Gunless",
            image: gunless
        },
        {
            id: uniqid(),
            text: "Huke",
            image: huke
        },
        {
            id: uniqid(),
            text: "Kenny",
            image: kenny
        },
        {
            id: uniqid(),
            text: "Scump",
            image: scump
        }
    ]

    const [cards, setCards] = useState(cardInfo);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let randomIdx = Math.floor(Math.random() * i);
            [array[randomIdx], array[i]] = [array[i], array[randomIdx]];
        }
    };

    const cardClicked = (e) => {
        const newCards = [...cards];
        shuffle(newCards);
        setCards(newCards);
        handleArray(e.target.id)
    }

    const handleArray = (id) => {
        const cardArray = [...clickedCards];
        console.log(cardArray)
        if (cardArray.includes(id)) {
            alert("card already clicked - resetting game")
            //lose
            handleScore("lose")
        } else {
            cardArray.push(id)
            setClickedCards(cardArray)
            //win
            handleScore("win")
        }
    }

    const handleScore = (outcome) => {
        if (outcome === "win") {
            setScore(score + 1);
            console.log(score)
        } else if (outcome === "lose") {
            if (score > highScore) {
                setHighScore(score)
                setScore(0)
                setClickedCards([])
            } else {
                setClickedCards([])
                setScore(0)
            }
        }
    }

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setCards(newCards);
    }, []);

    return (
        <div className="game-container">
            <div className="scoreboard">
                <div>Current Score: {score}</div>
                <div>High Score: {highScore}</div>
            </div>
            <div className="card-flex-container">
                {cards.map((card) => (
                    <Card card={card} key={card.id} cardClicked={cardClicked}/>
                ))}
            </div>
        </div>
    )
}

export default CardContainer