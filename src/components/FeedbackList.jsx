import { FeedbackItem } from './';

export const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) return <p>No Feed yet</p>;

  return (
    <div className="feedback-list">
      {feedback?.map((item) => {
        return <FeedbackItem key={item.id} {...item} handleDelete={handleDelete} />;
      })}
    </div>
  );
};
