import React from 'react';

//types

import {AnswerObject} from "../App";

//Styles


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: any;
    questionNumber: number;
    totalQuestion: number;
};
const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNumber,
                                           totalQuestion}) => (
    <div>
        <p className='number'>Question: {questionNumber} / {totalQuestion}</p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map((answer) => (
                <div key={answer}>
                    <button disabled={userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </div>
            ))}
        </div>
    </div>);

export default QuestionCard;