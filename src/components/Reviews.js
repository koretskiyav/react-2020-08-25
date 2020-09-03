import React from 'react'
import Rate from './Rate'

export default function Reviews ({ reviews }) {
  return (
    <div className='reviews'>
      { reviews.map((review) =>
        <div className='review' key={ review.id }>
          <h5>{ review.user }</h5>
          <p>{ review.text }</p>
          rating { review.rating }: <Rate rating={ review.rating } />
        </div>) }
    </div>
  )
}
