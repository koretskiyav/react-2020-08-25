import React from 'react';

export default function Rate(props) {
  return (
    <div>
      <p>рейтинг::{props.restos}</p>
    </div>
  );
}

/* 1. Создать компоненту **Rate**, которая принимает рейтинг (число от 1 до 5) и его отображает (можно просто показать число, нарисовать звездочки и раскрасить их, и т.д.). */
