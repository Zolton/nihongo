import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Security/axiosWithAuth";
import IndivQuizQuestion from "./IndivQuestion";

function QuizDataFormatting() {

    const [quizData, setQuizData] = useState();
    
    // Pull in data from backend, set it into a hook
    useEffect(() => {
    axiosWithAuth()
      .get(`https://nihongo2go.herokuapp.com/quiz/allquestions`)
      .then(res => {
        //console.log("this is res data", res.data);
        setQuizData(res.data);
      })
      .catch(rej => {
        // console.log("GET rejected");
        // console.log(rej);
      });
  }, []);

  return (
    <div>
          {/* Once Quiz data is loaded, map over it and send each question to IndivQuestion component;
          if quiz data is not yet loaded, tell User to please wait */}
          {quizData ? (
            // Each questionsObject sent is a separate question with its own data
            quizData.map(questionsObject => (<div>
              {console.log("From user home: ", questionsObject)}
              <IndivQuizQuestion questionsObject={questionsObject} />
             </div>
            ))
          ) : (
            <h1> Loading, Please wait...</h1>
          )}

    </div>
  )}




export default QuizDataFormatting
