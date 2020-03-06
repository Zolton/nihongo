import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../Security/axiosWithAuth";
import QuizFormat from "./QuizFormat";

function QuizDataPull(props) {
  const [quizData, setQuizData] = useState()
  const userDifficulty = props.userDifficulty

  useEffect(() => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_BACK_END_URL}/quiz/mulchoice/${userDifficulty}`)
      .then(res => {
        setQuizData(res.data);
      })
      .catch(rej => {
        // console.log("Error message: ", rej)
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
