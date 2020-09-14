import React from 'react';
import useForm from '../../../hooks/use-form';
import Rate from '../../rate';
import styles from './review-form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../button';
import { CREATE_REVIEW } from '../../../redux/constants';
import { userSelectorByName } from '../../../redux/selectors';

const INITIAL_VALUES = { name: '', text: '', rate: 5 };

const ReviewForm = ({ restaurantId }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    userSelectorByName(state, { name: values.name })
  );

  const handleSubmit = (ev) => {
    ev.preventDefault();

    dispatch({
      type: CREATE_REVIEW,
      payload: {
        reviewData: {
          text: values.text,
          rate: values.rate,
        },
        userData: {
          name: values.name,
          id: user ? user.id : null,
        },
        restaurantId,
      },
      needNewIds: user ? 1 : 2,
    });

    reset();
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.name}
          />
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...handlers.rate} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
