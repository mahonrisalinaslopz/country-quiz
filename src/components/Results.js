import React from 'react';
import { QuizContext } from '../helpers/context';
import { ReactComponent as ResultsIcon } from '../assets/undraw_winners_ao2o 2.svg';

export const Results = () => {
  const { score, setScore, setGameState } = React.useContext(QuizContext);
  const tryAgain = () => {
    setScore(0);
    setGameState('quiz');
  };
  return (
    <div className="quiz results">
      <div className="results__container">
        <ResultsIcon className="results__icon" />

        <h2 className="results__subheading">Results</h2>
        <p className="results__body">
          You got
          <span
            className="results__number"
            style={{ color: score > 0 ? 'green' : 'red' }}
          >
            &nbsp;{score}&nbsp;
          </span>
          correct answers
        </p>

        <button onClick={tryAgain} className="results__try-again-btn">
          Try again
        </button>
      </div>
    </div>
  );
};
