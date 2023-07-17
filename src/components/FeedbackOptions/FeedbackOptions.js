export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className="buttons-list">
      <li class="button-element">
        <button
          onClick={onLeaveFeedback}
          type="submit"
          className="button"
          data-variant="good"
        >
          Good
        </button>
      </li>
      <li class="button-element">
        <button
          onClick={onLeaveFeedback}
          type="submit"
          className="button"
          data-variant="neutral"
        >
          Neutral
        </button>
      </li>
      <li class="button-element">
        <button
          onClick={onLeaveFeedback}
          type="submit"
          className="button"
          data-variant="bad"
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
