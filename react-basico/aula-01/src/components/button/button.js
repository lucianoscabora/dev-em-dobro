import React from "react";
import '../button/button.css'

class Button extends React.Component {
    render() {
        return <button className="btn">{this.props.label}</button>
    }
}

Button.defaultProps = {
    label: 'Clique aqui com classe'
}

export default Button;