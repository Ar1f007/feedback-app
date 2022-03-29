import { Card } from '.';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useFeedbackContext } from '../context/FeedbackContext';
export const FeedbackItem = ({ id, text, rating }) => {
  const { deleteFeedback, editFeedback } = useFeedbackContext();

  const item = {
    id,
    text,
    rating,
  };

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
