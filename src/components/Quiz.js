import React from 'react';
import axios from 'axios';

import { Options } from './Options';

const api = 'https://restcountries.com/v3.1/region/asia';
const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const Quiz = () => {
  const [loading, setLoading] = React.useState(true);
  const [countries, setCountries] = React.useState([]);
  const effectRan = React.useRef(false);

  React.useEffect(() => {
    if (effectRan.current) {
      return;
    }
    if (effectRan.current === false) {
      setLoading(true);

      getCountries();
      effectRan.current = true;
    }
  }, [countries]);

  const getCountries = async () => {
    const { data } = await axios(api);
    const randomNumber = getRandomNumber(data.length);
    const randomFourCountries = data.slice(randomNumber, randomNumber + 4);
    setCountries(randomFourCountries);
    setLoading(false);
  };

  const randomNumber = getRandomNumber(countries.length);
  const selectedCountry = countries[randomNumber];

  const nextQuestion = () => {
    getCountries();
  };

  const questions = [
    { question: `${selectedCountry?.capital[0]} is the capital of` },
    {
      question: 'Which country does this flag belong to ?',
      flag: selectedCountry?.flags.png
    }
  ];

  const randomQuestion = questions[getRandomNumber(2)];

  if (loading) return <div>loading</div>;
  return (
    <div className="quiz">
      <div className="quiz__container">
        {randomQuestion.flag && (
          <div className="quiz__flag">
            <img
              alt={`flag-of-${selectedCountry.name.common}`}
              src={randomQuestion.flag}
            />
          </div>
        )}

        <h2 className="quiz__question">{randomQuestion.question}</h2>
        <Options
          countries={countries}
          correctAnswer={selectedCountry.name.common}
          nextQuestion={nextQuestion}
        />
      </div>
    </div>
  );
};
