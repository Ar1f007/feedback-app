import { useState, useEffect } from 'react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';
import { RatingSelect } from '.';
import { useFeedbackContext } from '../context/FeedbackContext';

export const FeedbackForm = () => {
  const { addFeedback, updateFeedback, feedbackProps } = useFeedbackContext();

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackProps.edit === true) {
      setBtnDisabled(false);
      setText(feedbackProps.item.text);
      setRating(feedbackProps.item.rating);
    }
  }, [feedbackProps]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length < 9) {
      setMessage('Text must be at least 10 characters long');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 9) {
      const newFeedback = { text, rating };

      if (feedbackProps.edit === true) {
        updateFeedback(feedbackProps.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selected={rating} select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};
