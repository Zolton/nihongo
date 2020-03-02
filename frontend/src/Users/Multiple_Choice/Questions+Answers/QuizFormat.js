import React, { useEffect } from "react";

function QuizFormat(props) {
  const quizData = props.quizData;

  console.log("formatting: ", quizData);

  return (
    <div>
      Hello from formatting
      {quizData ? (
        quizData.map(data => (
          <div>
            <h2>{data.question}</h2>
            <h2>{data.answer}</h2>
          </div>
        ))
      ) : (
        <h1>Loading, please wait</h1>
      )}
    </div>
  );
}

export default QuizFormat;
