import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component {
  static contextType = LanguageContext;


  renderSubmit (value){
  return value 
  }
  render(){
    return(
      <div className = "ui field">
        <label>
           {this.context.language === "english" ? "Name" : "Naam"}
        </label>
        <input />
      </div>
    )
  }
}

export default Field;
