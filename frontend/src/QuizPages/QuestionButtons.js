import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Security/axiosWithAuth"
import AnswerCorrect from "./AnswerCorrect";
import AnswerIncorrect from "./AnswerIncorrect";
import QuizFinished from "./QuizFinished";

function QuestionButtons(props) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [answerResponse, setAnswerResponse] = useState();
  const [axiosCheck, setAxiosCheck] = useState()

  // Rename props for easier use
  let setCurrentIndex = props.setCurrentIndex;
  let currentIndex = props.currentIndex;
  let quizLength = props.quizLength;
  let answerID = props.answerID;
  let answerTF = props.answerTF;

  // Functions for handling button clicks

  // 1) Disables Submit so user can't re-submit
  // 2) Sets AnswerResponse for component loading
  function submitHandler() {
    setButtonDisabled(true);
    if (answerTF === null) {
      return setAnswerResponse(false);
    }
    if (answerTF === 1) {
      // Store correct answers so user doesn't see repeats
      let correctAnswersArray = localStorage.getItem("correct_answers");
      // If it doesn't exist, make it
      if (correctAnswersArray === null) {
        localStorage.setItem("correct_answers", answerID);
        return setAnswerResponse(true);
      } 
      else {
        let AnswerArray = `[${correctAnswersArray}, ${answerID}]`;
        const jsonParsedArray = JSON.parse(AnswerArray);
        localStorage.setItem("correct_answers", jsonParsedArray);
        return setAnswerResponse(true);
      }
    }
  }

  function nextQuestion() {
    if (currentIndex < quizLength) {
      setButtonDisabled(false);
      setAnswerResponse(null);
      setCurrentIndex(currentIndex + 1);
    }
    // If user has submitted their answer and question is last one:
    if (answerResponse !== null && currentIndex === quizLength) {
      setAnswerResponse(null);
      setAnswerResponse(3);
    }
  }

  useEffect(() => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BACK_END_URL}/quiz/mulchoice/${userDifficulty}`)
      .then(res => {
        setQuizData(res.data);
      })
      .catch(rej => {
        // console.log("Error message: ", rej)
      });
  }, [axiosCheck]);


  return (
    <div>
      {console.log("props are ", props)}
      <button disabled={buttonDisabled} onClick={() => submitHandler()}>
        Submit Answer
      </button>
      <button onClick={() => nextQuestion()}>Next Question</button>
      {answerResponse === true ? <AnswerCorrect /> : null}
      {answerResponse === false ? <AnswerIncorrect /> : null}
      {answerResponse === 3 ? <QuizFinished /> : null}
    </div>
  );
}

export default QuestionButtons;
