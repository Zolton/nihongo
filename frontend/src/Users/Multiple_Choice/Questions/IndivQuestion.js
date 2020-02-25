import React from "react";

function IndivQuizQuestionFormatting(props) {
  let questionID = props.questionsObject.id;
  let question = props.questionsObject.question;
  let author = props.questionsObject.author;

  return (
    <div>
      {console.log("Indiv props: ", props)}
      <h1> Hello from Indiv Quetions</h1>
      <h3>Here's one question: {question}</h3>
      <h4>This is questionID: {questionID}</h4>
      <h4>This question was submitted by author ID: {author}</h4>
    </div>
  );
}

export default IndivQuizQuestionFormatting;
