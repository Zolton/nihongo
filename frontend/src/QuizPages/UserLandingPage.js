import React, { useState, useEffect } from "react";
import QuizDataPull from "./Multiple_Choice/Questions+Answers/QuizDataPull"

function UserHome() {
  // Temp - chagne this to a button/user choice; easy, medium, hard, expert - will detemrine which quiz questions are sent back from backend
const difficulty = "easy"


  return (
    <div className="test">
      <p>Hello User!</p>
      <QuizDataPull userDifficulty={difficulty} />
    </div>
  );
}

export default UserHome;
