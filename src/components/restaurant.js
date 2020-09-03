import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function Restaurant(props) {
  return (
    <div>
      <p>Restaurant::</p>
      <Menu menu={props.menu} />
      <Reviews user={props.user} text={props.text} reviews={props.reviews} />

      <p>Средний рейтинг::</p>
      <Rate />
    </div>
  );
}

/* 3. Создать компоненту **Restaurant** (рендерить там, где сейчас **Menu**). В **Restaurant** показывать **Menu** и **Reviews**, а так же _средний рейтинг с помощью компоненты **Rate**. */
