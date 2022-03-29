import { FeedbackItem } from './';
import { motion, AnimatePresence } from 'framer-motion';

export const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) return <p>No Feed yet</p>;

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback?.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem {...item} handleDelete={handleDelete} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
