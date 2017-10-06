import React from 'react';

class LikesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
        this.onLike = this.onLike.bind(this);
        this.onDislike = this.onDislike.bind(this);
    }

    render() {
        return(
            <div>
                Likes: <span>{this.state.likes}</span>
                <div>
                    <button onClick={this.onLike}>Like me</button>
                    <button onClick={this.onDislike}>Dislike me</button>
                </div>
            </div>
        );
    }

    onLike() {
        let newLikesCount = this.state.likes + 1;
        this.setState({
            likes: newLikesCount
        });
    }

    onDislike() {
        let newLikesCount = this.state.likes === 0 ? 0 : this.state.likes - 1;
        this.setState({
            likes: newLikesCount
        });
    }
};

export default LikesComponent;