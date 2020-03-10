import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Security/axiosWithAuth";
import QuizFormat from "./QuestionFormat";

function QuizDataPull(props) {
  const [quizData, setQuizData] = useState()
  const userDifficulty = props.userDifficulty

  useEffect(() => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_BACK_END_URL}/quiz/mulchoice/${userDifficulty}`)
      .then(res => {
        setQuizData(res.data);
        console.log("quiz data", quizData)
      })
      .catch(rej => {
        // console.log("Error message: ", rej)
      });
  }, []);

  return (
    <div>
      <QuizFormat quizData={quizData} />
    </div>
  );
}

export default QuizDataPull;
