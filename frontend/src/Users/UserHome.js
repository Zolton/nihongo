import React, { useState, useEffect } from "react";
import QuizData from "./Multiple_Choice/Questions/questionDataMap"
import AnswerData from "./Multiple_Choice/Answers/AnswerDataMap"
import Quiz from "./Multiple_Choice/Questions+Answers/QuizDataPull"
import Test from "./Multiple_Choice/test"

function UserHome() {



  return (
    <div className="test">
      <p>Hello User!</p>
      <Test />
    </div>
  );
}

export default UserHome;
