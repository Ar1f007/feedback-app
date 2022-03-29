import { useState } from 'react';
import FeedbackData from './data/feedbackData';

import { Header, FeedbackList } from './components';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text="Hello world" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};
export default App;
