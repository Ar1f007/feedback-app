import { createContext, useState, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid/async';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackProps, setFeedbackProps] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    try {
      newFeedback.id = await nanoid();
      setFeedback([...feedback, newFeedback]);
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  const editFeedback = (item) => {
    setFeedbackProps({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, editedItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...editedItem } : item)));
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,
        feedbackProps,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);

export default FeedbackContext;
