import React, { Component } from 'react';
import GitHubData from './containers/GitHubData';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Redux thunk example</h1>
                <GitHubData />
            </div>
        )
    }
}

export default App;