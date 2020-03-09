import React, { useState } from "react";
import AnswerFormat from "./AnswerFormat";

function QuizFormat(props) {
  const quizData = props.quizData;
  
  // Used for changing to next question
  const [currentIndex, setCurrentIndex] = useState(0)

  // Check if props loaded yet
  if (quizData) {

    // Rename props for easier time
    let keys = Object.keys(quizData);
    let quizLength = keys.length
    quizLength -= 1
    let quizQuestion = quizData[currentIndex].question;
    let answerObject = quizData[currentIndex].answers;

    return (
      <div>
        <h1>Question Number {currentIndex + 1}</h1>
         <h3>{quizQuestion}</h3>
         <AnswerFormat answerObject = {answerObject} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} quizLength = {quizLength} />
      </div>
    );

  } 
  // If props not loaded, keep waiting
  else {
    return (
      <div>
        {/* Insert loading animation component here */}
        Loading, please wait
      </div>
    );
  }
}

export default QuizFormat;
