import React from 'react';

//components

import QuestionCart from "./components/QuestionCard";

const App = () => {

  const startTrivia = async () =>{

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>

      <p className='score'>Score: </p>
      <QuestionCart/>
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
