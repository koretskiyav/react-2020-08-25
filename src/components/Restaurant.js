import React from 'react'
import Menu from './menu'
import Reviews from './Reviews'
import Rate from './Rate'

export default function Restaurant ({ restaurant }) {
  const reviews = restaurant.reviews.map(review => review.rating)
  const average = reviews.reduce((a, b) => a + b) / reviews.length

  return (
    <div>
      <Menu menu={ restaurant.menu } />
      <Reviews reviews={ restaurant.reviews } />
      <br/>
      Restaurant average rating: <Rate rating={ average } />
    </div>
  )
}
