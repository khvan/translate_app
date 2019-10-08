import React from 'react';
import LanguageStore from '../contexts/LanguageContext';


class LanguageSelector extends React.Component{
  static contextType = LanguageStore;
  

  render(){
    console.log(this.context)
    console.log(this.context.language)
    return(
      <div>
      <i
        className="flag us"
        onClick={() => this.context.onLanguageChange ('english')}
      />
      <i
        className="flag in"
        onClick={() => this.context.onLanguageChange ('hindi')}
      />
    </div>
    )
  }
}



export default LanguageSelector;