import React from "react";
import '../card/card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3>Título</h3>
                <p>Texto do card</p>
            </div>
        )
    }
}

export default Card;