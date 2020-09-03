import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Restaurant from './restaurant';
import Rate from './rate';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  return (
    <div>
      <Navigation
        onRestaurantClick={setActiveId}
        restaurants={props.restaurants}
      />
      <Restaurant
        menu={activeRestaurant.menu}
        user={activeRestaurant.reviews[0].user}
        text={activeRestaurant.reviews[0].text}
        reviews={activeRestaurant.reviews}
      />

      <Rate restos={activeRestaurant.reviews[0].rating} />
    </div>
  );
}

/*
1. Создать компоненту **Rate**, которая принимает рейтинг (число от 1 до 5) и его отображает (можно просто показать число, нарисовать звездочки и раскрасить их, и т.д.).
2. Создать компоненту **Reviews**, где выводить имена и отзывы про рестораны и _рейтинг с помощью компоненты **Rate**.
3. Создать компоненту **Restaurant** (рендерить там, где сейчас **Menu**). В **Restaurant** показывать **Menu** и **Reviews**, а так же _средний рейтинг с помощью компоненты **Rate**.
 */

// props.restaurants[0].reviews[0].rating

//<Menu menu={activeRestaurant.menu} />
