// import PropTypes from 'prop-types';
import './Feedback.css';

export let state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const buttonOnClick = event => {
  console.log(event.currentTarget.dataset.variant);
  for (const key in state) {
    if (key === event.currentTarget.dataset.variant) {
      key = state[key] += 1;
      console.log(state[key]);
    }
  }
};

// poprawić pętle, nadpisywać weartości w obiekcie state

export const FeedbackTemplate = ({ feedback }) => (
  <div class="feedback">
    <h2 class="title">Please leave feedback</h2>
    <ul className="buttons-list">
      <li class="button-element">
        <button
          onClick={buttonOnClick}
          type="submit"
          class="button"
          data-variant="good"
        >
          Good
        </button>
      </li>
      <li class="button-element">
        <button
          onClick={buttonOnClick}
          type="submit"
          class="button"
          data-variant="neutral"
        >
          Neutral
        </button>
      </li>
      <li class="button-element">
        <button
          onClick={buttonOnClick}
          type="submit"
          class="button"
          data-variant="bad"
        >
          Bad
        </button>
      </li>
    </ul>

    <div class="feedback-outcome">
      <h2 class="title">Statistics</h2>
      <ul class="outcome-list">
        <li class="outcome-element">
          <p>
            Good: <span>{feedback.good}</span>
          </p>
        </li>
        <li class="outcome-element">
          <p>
            Neutral: <span>{feedback.neutral}</span>
          </p>
        </li>
        <li class="outcome-element">
          <p>
            Bad: <span>{feedback.bad}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
);
