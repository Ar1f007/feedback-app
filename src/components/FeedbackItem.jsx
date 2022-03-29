import { Card } from '.';
import { FaTimes } from 'react-icons/fa';

export const FeedbackItem = ({ id, text, rating, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
