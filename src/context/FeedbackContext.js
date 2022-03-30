import { createContext, useState, useContext, useEffect } from 'react';

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
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    try {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      });

      const data = await response.json();

      setFeedback([data, ...feedback]);
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

  const updateFeedback = async (id, editedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedItem),
    });

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

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
