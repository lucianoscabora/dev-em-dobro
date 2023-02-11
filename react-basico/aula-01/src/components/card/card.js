import React from "react";
import '../card/card.css'

const Card = ({children}) => {
    return (
        <div className="card">
            {children}  
            </div>
    )
}

/* class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3>{this.props.title}</h3>
                <p>Texto do card</p>
            </div>
        )
    }
} */

export default Card;