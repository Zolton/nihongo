import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Security/axiosWithAuth";
import AnswerCorrect from "./AnswerCorrect";
import AnswerIncorrect from "./AnswerIncorrect";
import QuizFinished from "./QuizFinished";

function QuestionButtons(props) {
  // Variable declaration
  let LOCAL_STORAGE_TRIGGER_NUMBER = 5;

  // Used to enable/disable submit button
  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
  // Trigger for rendering Correct, Incorrect, and You're Done! components
  const [answerResponse, setAnswerResponse] = useState();
  // Keeps track of local storage, used as trigger for axios post request
  const [axiosCounter, setAxiosCounter] = useState(0);

  // Rename props for easier use
  let setCurrentIndex = props.setCurrentIndex;
  let currentIndex = props.currentIndex;
  let quizLength = props.quizLength;
  let questionID = props.questionID;
  let answerTF = props.answerTF;
  
  // Functions for handling button clicks

  function submitHandler() {
    setsubmitButtonDisabled(true);
    // User answered incorrectly, do nothing, tell user they answered incorrectly
    if (answerTF === null) {
      return setAnswerResponse(false);
    }
    // User answered correctly
    if (answerTF === 1) {
      // Check if local storage exists
      let correctAnswersArray = localStorage.getItem("correct_answers");
      // If it doesn't exist, create it
      if (correctAnswersArray === null) {
        localStorage.setItem("correct_answers", questionID);
        setAxiosCounter(axiosCounter + 1);
        return setAnswerResponse(true);
      }
      // If local storage alreay exists, add in new correct answer, check if its time to send to backend
      //  & tell user they answered correctly
      if (correctAnswersArray !== null) {
        addAnswerToLocalStorage();
        setAxiosCounter(axiosCounter + 1);
        isItTimeToSend()
        return setAnswerResponse(true);
      }
    }
  }

  function nextQuestion() {
    // More questions to go
    if (currentIndex < quizLength) {
      setsubmitButtonDisabled(false);
      setAnswerResponse(null);
      setCurrentIndex(currentIndex + 1);
    }
    // If user has submitted their answer and question is last one, tell them and send local storage to backend:
    if (answerResponse !== null && currentIndex === quizLength) {
      setAnswerResponse(null);
      setAnswerResponse(3);
      updateUserTable_QsAnsweredCorretly()
    }
  }

  // Retrieves localStorage, adds to it, then replaces
  function addAnswerToLocalStorage() {
    let currentArray = localStorage.getItem("correct_answers")
    let AnswerArray = `[${currentArray}, ${questionID}]`
    const jsonParsedArray = JSON.parse(AnswerArray)
    localStorage.setItem("correct_answers", jsonParsedArray)
    return
  }

  function isItTimeToSend() {
    if (axiosCounter >= LOCAL_STORAGE_TRIGGER_NUMBER) {
      updateUserTable_QsAnsweredCorretly()
    }
    return;
  }

  function updateUserTable_QsAnsweredCorretly () {
    const correctAnswers = localStorage.getItem("correct_answers")
    // Converts json string to array of numbers
    let correctAnswersSet = new Set()
    // Turn string into #'s
    correctAnswers.split(",").map(x=>correctAnswersSet.add(+x))
    console.log(correctAnswersSet)
    // Set cleans up duplicates
    let correctAnswersObject = {array3: correctAnswersSet}
        
    // axiosWithAuth()
    //   .post(`${process.env.REACT_APP_BACK_END_URL}/answers/periodic`, correctAnswersObject)

    //   .then(res => {
    //     console.log(res)
    //   })
    // .then(res=>{
    //     localStorage.removeItem("correct_answers")
    //       setAxiosCounter(0)
    //       setAxiosCheck(0)
    // })
      // .catch(rej => {
      //   // console.log("Error message: ", rej)
      // });

  }

  

  return (
    <div>
      <button disabled={submitButtonDisabled} onClick={() => submitHandler()}>
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
