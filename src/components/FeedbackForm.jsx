import { useState } from 'react';
import { Card } from './shared/Card';

export const FeedbackForm = () => {
  const [text, setText] = useState('');

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};
