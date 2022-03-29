import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FeedbackProvider } from './context/FeedbackContext';
import { Header, FeedbackList, FeedbackStats, FeedbackForm, AboutLinkIcon } from './components';
import { About } from './pages/About';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header text={'Feedback Ui'} />
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
                <AboutLinkIcon />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};
export default App;
