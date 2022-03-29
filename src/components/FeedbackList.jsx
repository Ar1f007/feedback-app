import { FeedbackItem } from './';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) return <p>No Feed yet</p>;

  const reverseFeedback = feedback?.slice().reverse();
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {reverseFeedback?.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem {...item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
