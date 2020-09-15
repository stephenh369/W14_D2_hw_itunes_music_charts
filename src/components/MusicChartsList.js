import React from 'react';
import MusicChartEntry from './MusicChartEntry';

const MusicChartsList = props => {
  const chartsNodes = props.charts.map((entry, index) => 
  <MusicChartEntry 
  key={entry.id.attributes['im:id']}
  index={index +1}
  artist={entry['im:artist'].label} 
  song={entry['im:name'].label}
  audio={entry.link['1'].attributes.href}>
  </MusicChartEntry>);

  return <> <h3>Top 20</h3> <ol>{chartsNodes}</ol></>;
}

export default MusicChartsList;