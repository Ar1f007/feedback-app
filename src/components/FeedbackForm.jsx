import { useState } from 'react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';

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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};
