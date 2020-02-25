import React from "react";
import QuizData from "../Questions/questionDataMap";
import AnswerData from "../Answers/AnswerDataMap";

function Quiz(props) {
  return (
    <div>
    <h1>Hello From Quiz</h1>
      {console.log("Quiz data: ", props)}
      {console.log("Quiz data for answers: ", props.answersObject)}
      {/* <QuizData />
      <AnswerData /> */}

    </div>
  );
}

export default Quiz;
