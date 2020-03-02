import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../Security/axiosWithAuth";
import QuizFormat from "./QuizFormat";

function QuizDataPull(props) {
  const [quizData, setQuizData] = useState()
  //const quizData = {}
  //const test = []
  const userDifficulty = props.userDifficulty

  // Pull in data from backend, set it into a dictionary
  // Since each question is unique, use that as the key, answer as the value
  useEffect(() => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_BACK_END_URL}/quiz/mulchoice/${userDifficulty}`)
      .then(res => {
        console.log("res data: ", res.data)
        //res.data.map(data=>{console.log("res data mapped: ", data)})
        // res.data.map(data=> test.push[qui])
        // console.log("dictionary done: ", quizData, test)
        setQuizData(res.data);

      })
      .catch(rej => {
        // console.log("GET rejected");
        // console.log(rej);
      });
  }, []);

  
  return (
    <div>
      
      Hello from quiz data pull

      <QuizFormat quizData={quizData} />
    </div>
  );
}

export default QuizDataPull;
