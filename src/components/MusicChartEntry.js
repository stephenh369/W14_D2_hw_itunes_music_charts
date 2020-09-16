import React from 'react';

const Entry = props =>
  <> 
  <li>{props.artist} - {props.song} <audio controls src={props.audio}></audio></li>
  </>;
  
export default Entry;