import React, { Component } from 'react';

class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = {
      play: false
    }
    this.audio = new Audio(this.props);
  }
  
  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }
  
  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  }
  
  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>
    );
  }
}

export default MusicPlayer;