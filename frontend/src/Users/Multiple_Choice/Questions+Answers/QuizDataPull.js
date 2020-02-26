import React, { useState, useEffect }  from "react";
import QuizData from "../Questions/questionDataMap";
import AnswerData from "../Answers/AnswerDataMap";
import QuizFormat from "./QuizFormat"

function Quiz(props) {
    const [questionData, setQuestionData] = useState();
    const [answerData, setAnswerData] = useState();

  return (
    <div>
    <h1>Hello From Quiz</h1>
    <QuizData setQuestionData = {setQuestionData} />
    <AnswerData setAnswerData = {setAnswerData} />
      {console.log("Quiz data questions: ", questionData)}
      {console.log("Quiz data answers: ", answerData)}
      {/* {console.log("Quiz data for answers: ", props.answersObject)} */}
      {/* <QuizData />
      <AnswerData /> */}
    {/* <QuizFormat questionData = {questionData} answerData = {answerData} /> */}

    </div>
  );
}

export default Quiz;
