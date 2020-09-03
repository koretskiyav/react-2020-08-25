import React from 'react';

export default function Rate(props) {
  var stars = '';
  for (let i = 0; i < props.rate; i++) {
    stars += '*';
  }
  return (
    <div>
      <h3>{stars}</h3>
    </div>
  );
}
