import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  
  renderButton(color){
    return (
      <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {value => this.renderButtonName (value)}
      </LanguageContext.Consumer>
    </button>
    )
  }
  
  renderButtonName (value) {
    return value === 'english' ? 'Submit' : 'Voorlagen';
  }
  render () {
    return (
      <ColorContext.Consumer>
        {(color)=> this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
