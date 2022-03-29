import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid/async';

import FeedbackData from './data/feedbackData';
import { Header, FeedbackList, FeedbackStats, FeedbackForm, AboutLinkIcon } from './components';
import { About } from './pages/About';

import { FeedbackProvider } from './context/FeedbackContext';

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
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header text={'Feedback Ui'} />
                <div className="container">
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                </div>
                <AboutLinkIcon />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};
export default App;
