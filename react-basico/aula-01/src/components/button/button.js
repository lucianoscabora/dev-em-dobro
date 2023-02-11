import React from "react";
import '../button/button.css'

const sayHello = () => {
    console.log('olá');
}

class Button extends React.Component {
    render() {
        return <button className="btn" onClick={sayHello}>{this.props.label}</button>
    }
}

Button.defaultProps = {
    label: 'Clique aqui com classe'
}

export default Button;