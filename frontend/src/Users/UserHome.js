import React, { useState, useEffect } from "react";
import QuizData from "./Multiple_Choice/Questions/questionDataMap"
import AnswerData from "./Multiple_Choice/Answers/AnswerDataMap"
// import Quiz from "../Users/Multiple_Choice/Questions+Answers/Quiz"

function UserHome() {



  return (
    <div className="test">
      <p>Hello User!</p>
    <QuizData />
    <AnswerData />

    </div>
  );
}

export default UserHome;
