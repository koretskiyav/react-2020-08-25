import React from 'react';

export default function Rate(props) {
  const items = new Array(props.count).fill('');
  return (
    <ul style={{ display: 'flex', margin: 0, listStyle: 'none' }}>
      {items.map((_, index) => (
        <li key={index} style={{ color: 'green' }}>
          ✪
        </li>
      ))}
    </ul>
  );
}
