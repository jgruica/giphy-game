import React, { Component } from 'react';
import './App.css';
import Challenge from './Challenge'
import Challenger from './Challenger'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { challengeImageUrl: null };
    }

    onChallengeLoaded = (imageUrl) => {
        this.setState({ challengeImageUrl: imageUrl });
    }

    render() {
        /*setInterval(() => {
            this.refs.challenge.reload();
        }, 1000);
*/

        return (
            <div className="App">
                <h1>Giphy Game</h1>
                <Challenge ref="challenge" onImageLoaded={this.onChallengeLoaded} />
                <Challenger ref="challenger" challengeImageUrl={this.state.challengeImageUrl} />
            </div>
        );
    }
}

export default App;
