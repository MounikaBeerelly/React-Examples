import React, { Component } from 'react';
import './App.css';

import StarMatch from './Components/Game/gameComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Star Match Game Application</h1>
        <StarMatch />
      </React.Fragment>
    );
  }
}
 export default App;