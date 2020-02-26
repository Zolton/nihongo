import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../Security/axiosWithAuth";
import IndivQuizQuestionFormatting from "./IndivQuestion";
import Quiz from "../Questions+Answers/QuizDataPull"

// Component purpose: Pull from backend, map over it, send each individual question to another component

function QuizDataFormatting(props) {
  

  // Pull in data from backend, set it into a hook
  useEffect(() => {
    axiosWithAuth()
      .get(`https://nihongo2go.herokuapp.com/quiz/allquestions`)
      .then(res => {
        // console.log("this is res data", res.data);
        props.setQuestionData(res.data);
      })
      .catch(rej => {
        // console.log("GET rejected");
        // console.log(rej);
      })
  }, []);

  return (
    <div>

      {/* FYI - quizData comes in as an array of objects - [ {...}, {...} ]
      {questionData ? (
        questionData.map(questionsObject => (
          <div>
            <IndivQuizQuestionFormatting questionsObject={questionsObject} />
          </div>
        ))
      ) : (
        <h1> Loading, Please wait...</h1>
      )} */}
    </div>
  );
}

export default QuizDataFormatting;
