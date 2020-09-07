import React from 'react';

export default function Rate(props) {
  return (
    <div>
      {props.rate.user && <p>Name: {props.rate.user}</p>}
      {props.rate.text && <p>Reviews: {props.rate.text}</p>}
      <p>Rating: {props.rate.rating}</p>
    </div>
  );
}
