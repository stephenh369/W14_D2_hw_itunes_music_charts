import React from 'react';

const Entry = props =>
  <> 
  <li>{props.index}. {props.artist} - {props.song}</li>
  </>;
  
export default Entry;