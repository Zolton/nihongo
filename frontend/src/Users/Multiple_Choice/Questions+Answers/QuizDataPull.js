import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../Security/axiosWithAuth";
import QuizFormat from "./QuizFormat";

function QuizDataPull(props) {
  const [quizData, setQuizData] = useState();
  console.log(props.userDifficulty)
  const userDifficulty = props.userDifficulty

  // Pull in data from backend, set it into a hook
  useEffect(() => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_BACK_END_URL}/quiz/mulchoice/${userDifficulty}`)
      .then(res => {
        // console.log("res data: ", res.data)
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
      {console.log("this is quizData: ", quizData)}
      <QuizFormat quizData={quizData} />
    </div>
  );
}

export default QuizDataPull;
