import { createContext, useState, useContext } from 'react';
import { nanoid } from 'nanoid/async';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);

  const [feedbackProps, setFeedbackProps] = useState({
    item: {},
    edit: false,
  });

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
      value={{ feedback, addFeedback, editFeedback, updateFeedback, deleteFeedback, feedbackProps }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);

export default FeedbackContext;
