import React, { Component } from 'react';
import $ from 'jquery'

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUrl: null };
    }

    render() {
        return (
            <div>
                {this.state.imageUrl && <img src={this.state.imageUrl} alt="Challenge Giphy!" />}
            </div>
        );
    }

    componentDidMount() {
        this.reload();
    }

    reload() {
        $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC', (response) => {
            const imageUrl = response.data.image_url;
            this.setState({ imageUrl: imageUrl });
            this.props.onImageLoaded(imageUrl);
        });
    }
}

export default Challenge;
