import { FeedbackTemplate } from './Feedback/Feedback';
import { state } from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackTemplate feedback={state} />
    </div>
  );
};
