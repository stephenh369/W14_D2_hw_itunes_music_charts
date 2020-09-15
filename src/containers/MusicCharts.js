import React, { Component } from 'react';
import MusicChartsList from '../components/MusicChartsList';

class MusicCharts extends Component {
  constructor() {
    super();
    this.state = {
      charts: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
      .then(res => res.json())
      .then(charts => this.setState({ charts: charts.feed.entry }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="music-charts">
        <h2>iTunes UK</h2>
        <MusicChartsList charts={this.state.charts}/>
      </div>
    );
  }
}

export default MusicCharts;