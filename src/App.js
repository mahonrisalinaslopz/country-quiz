import React from 'react';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { QuizContext } from './helpers/context';
import './App.css';

import { ReactComponent as QuizIcon } from './assets/undraw_adventure_4hum 1.svg';

function App() {
  const [gameState, setGameState] = React.useState('quiz');
  const [score, setScore] = React.useState(0);

  return (
    <div className="app">
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        <div className="country-quiz">
          <div className="country-quiz__header">
            <h1 className="country-quiz__heading">Country Quiz </h1>
            {gameState === 'quiz' && (
              <div>
                <QuizIcon className="country-quiz__quiz-icon" />
              </div>
            )}
          </div>
          {gameState === 'quiz' && <Quiz />}
          {gameState === 'results' && <Results />}
        </div>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
