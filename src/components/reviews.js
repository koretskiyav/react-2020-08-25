import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
    return (
        <div>
            <p>user::{props.user}</p>
            <p>text::{props.text}</p>
            <p>рейтинг::</p><Rate />
            <p>
                {props.reviews[0].user}
                {props.reviews.map((item) => (
                    key = { item.id } item = { user }
                ))}
            </p>
        </div>
    );
}

/* 2. Создать компоненту **Reviews**, где выводить имена и отзывы про рестораны и _рейтинг с помощью компоненты **Rate**. */


/* {props.reviews.map((item) => (
                    key = { item.id } item = { user }
                ))} */

//props.reviews[0].user