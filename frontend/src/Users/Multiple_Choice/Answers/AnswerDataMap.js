import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../Security/axiosWithAuth";
import IndivQuizAnswerFormatting from "./IndivAnswer";
import Quiz from "../Questions+Answers/Quiz"

// Component purpose: Pull from backend, map over it, send each individual question to another component

function AnswerDataFormatting() {
  const [answerData, setAnswerData] = useState();
  // Pull in data from backend, set it into a hook
  useEffect(() => {
    axiosWithAuth()
      .get(`https://nihongo2go.herokuapp.com/quiz/allanswers`)
      .then(res => {
        //console.log("this is res data", res.data);
        setAnswerData(res.data);
      })
      .catch(rej => {
        // console.log("GET rejected");
        // console.log(rej);
      });
  }, []);

  return (
    <div>
      {/* FYI - answerData comes in as an array of objects - [ {...}, {...} ] */}
      {answerData ? (
        answerData.map(answersObject => (
          <div>
            <IndivQuizAnswerFormatting answersObject={answersObject} />
          </div>
        ))
      ) : (
        <h1> Loading, Please wait...</h1>
      )}
    </div>
  );
}

export default AnswerDataFormatting;
