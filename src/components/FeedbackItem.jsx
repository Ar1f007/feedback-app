import { Card } from '.';
import { FaTimes } from 'react-icons/fa';
import { useFeedbackContext } from '../context/FeedbackContext';
export const FeedbackItem = ({ id, text, rating }) => {
  const { deleteFeedback } = useFeedbackContext();

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
