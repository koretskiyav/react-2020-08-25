import React from 'react';

export default function Rate({ text, rating }) {
  return (
    <p style={{ fontSize: '10px' }}>
      {text}: {rating} / 5
    </p>
  );
}
