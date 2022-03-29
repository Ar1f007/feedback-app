import { FeedbackItem } from './';
export const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) return <p>No Feed yet</p>;

  return (
    <div className="feedback-list">
      {feedback?.map((item) => {
        return <FeedbackItem key={item.id} {...item} />;
      })}
    </div>
  );
};
