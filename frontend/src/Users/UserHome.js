import React, { useState, useEffect } from "react";
import QuizData from "./Multiple_Choice/Questions/quizDataMap"
import AnswerData from "./Multiple_Choice/Answers/AnswerDataMap"
import Quiz from "../Users/Multiple_Choice/Questions+Answers/Quiz"

function UserHome() {



  return (
    <div className="test">
      <p>Hello User!</p>
    <Quiz />

    </div>
  );
}

export default UserHome;
