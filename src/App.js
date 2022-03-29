import { useState } from 'react';
import FeedbackData from './data/feedbackData';
import { nanoid } from 'nanoid/async';

import { Header, FeedbackList, FeedbackStats, FeedbackForm } from './components';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    try {
      newFeedback.id = await nanoid();
      setFeedback([...feedback, newFeedback]);
    } catch (error) {
      console.log('Something wrong happened');
    }
  };

  return (
    <>
      <Header text={'Feedback Ui'} />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};
export default App;
