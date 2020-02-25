import React from "react";

function IndivQuizAnswerFormatting(props) {
  let answerID = props.answersObject.id;
  let answer = props.answersObject.answer;
  let isCorrect = props.answersObject.correct_answer
  let questionID = props.answersObject.question_id;

  return (
    <div>
      {console.log("Indiv props from answer: ", props)}
      <h1> Hello from Indiv Quetions</h1>
      <h3>Here's one answer: {answer}</h3>
      <h4>This is answerID {answerID}</h4>
      <h4>Is this answer correct?: {isCorrect === true ? (<h5>Yes!!</h5>) : (<h5>Noooo</h5>)}</h4>
    <h4>This answer belongs to questionID: {questionID}</h4>
    </div>
  );
}

export default IndivQuizAnswerFormatting;
