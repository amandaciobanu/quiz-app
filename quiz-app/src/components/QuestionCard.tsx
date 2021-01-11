import React from 'react';


type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNumber: number;
    totalQuestion: number;
};
const QuestionCart: React.FC<Props> = () => (

    <div>Question Card</div>);

export default QuestionCart;