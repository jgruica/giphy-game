import React, { Component } from 'react';
import './Challenger.css';
import $ from 'jquery'

class Challenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            searchResultImages: [],
            isHit: null
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    buttonClicked = (event) => {
        $.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=' + this.state.value, (response) => {
            const searchResultImages = response.data.map(giphy => giphy.images.original.url);
            const isHit = searchResultImages.includes(this.props.challengeImageUrl);

            this.setState({
                searchResultImages: searchResultImages,
                isHit: isHit
            });
        });
    }

    render() {
        const searchResults = this.state.searchResultImages.map(image =>
            <img key={image} src={image} alt="Giphy" className="search-result" />
        );

        return (
            <div>
                <p><input type="text" value={this.state.value} onChange={this.handleChange} /></p>
                <p><button onClick={this.buttonClicked}>Check</button></p>
                { this.state.isHit === true && <h1>HIT!</h1> }
                { this.state.isHit === false && <h1>MISS!</h1> }
                <div>
                    {searchResults}
                </div>
            </div>
        );
    }
}

export default Challenger;