import React from "react";
import "../styles/Header.css"

const Header = () => {
    return(
        <div>
            <div className="welcome-message">
                <p><b>Welcome to the Call of Duty Pro Player memorization game</b></p>
                <p>click on the cards, which will shuffle after every click - don't click on the same card twice.</p>
                <p>compete for your high score</p>
                <hr/>
            </div>
        </div>
    )
}

export default Header
  