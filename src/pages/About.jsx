import { Link } from 'react-router-dom';
import { Card } from '../components';

export const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a react app to leave feedback for a product or service.</p>

        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
};
