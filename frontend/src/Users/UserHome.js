import React, { useState, useEffect } from "react";
import QuizData from "./Multiple_Choice/Questions/quizDataMap"
import AnswerData from "./Multiple_Choice/Answers/AnswerDataMap"

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
