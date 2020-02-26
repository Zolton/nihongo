import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../Security/axiosWithAuth";
import IndivQuizAnswerFormatting from "./IndivAnswer";
import Quiz from "../Questions+Answers/QuizDataPull"

// Component purpose: Pull from backend, map over it, send each individual question to another component

function AnswerDataFormatting(props) {
  const [questionData, setQuestionData] = useState();
  const [answerData, setAnswerData] = useState();
  
  // Pull in data from backend, set it into a hook
  useEffect(() => {
    axiosWithAuth()
      .get(`https://nihongo2go.herokuapp.com/quiz/allanswers`)
      .then(answers => {
        //console.log("this is res data", res.data);
        setAnswerData(answers.data);
      })
      .catch(rej => {
        // console.log("GET rejected");
        // console.log(rej);
      })
      .get(`https://nihongo2go.herokuapp.com/quiz/allquestions`)
      .then(questions=>{
        setQuestionData(questions.data)

      })
  }, []);

  return (
    <div>
      {console.log("res1", answerData)}
      {console.log("res2", questionData)}
      {/* FYI - answerData comes in as an array of objects - [ {...}, {...} ] */}
      {/* {answerData ? (
        answerData.map(answersObject => (
          <div>
            <IndivQuizAnswerFormatting answersObject={answersObject} />
          </div>
        ))
      ) : (
        <h1> Loading, Please wait...</h1>
      )} */}
    </div>
  );
}

export default AnswerDataFormatting;
