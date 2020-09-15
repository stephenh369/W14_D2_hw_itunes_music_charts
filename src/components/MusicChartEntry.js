import React from 'react';
import MusicPlayer from './MusicPlayer';

const Entry = props =>
  <> 
  <li>{props.artist} - {props.song} <MusicPlayer audio={props.audio}/></li>
  </>;
  
export default Entry;