import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../Security/axiosWithAuth";
import QuizFormat from "./QuizFormat";

function QuizDataPull() {
  const [quizData, setQuizData] = useState();

  // Pull in data from backend, set it into a hook
  useEffect(() => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_BACK_END_URL}/quiz/mulchoice`)
      .then(res => {
        console.log("res data: ", res.data)
        setQuizData(res.data);
      })
      .catch(rej => {
        // console.log("GET rejected");
        // console.log(rej);
      });
  }, []);
  return (
    <div>
      {quizData ? (quizData.map(x=>console.log(x))) : (<h1>Loading, pleassse wait</h1>)}
      Hello from quiz data pull
      {console.log("this is quizData: ", quizData)}
      <QuizFormat quizData={quizData} />
    </div>
  );
}

export default QuizDataPull;
