import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  static contextType = LanguageContext;
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
   }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          { (value) => value === 'english' ? 'Submit' : 'Voorleggen' }
      </LanguageContext.Consumer>
      </button>
    );
  }
}


export default Button;
