import React, { useState, useEffect } from "react";
import QuizDataPull from "../QuizPages/QuizDataPull"

function UserHome() {
  // Temp - chagne this to a button/user choice; easy, medium, hard, expert - will detemrine which quiz questions are sent back from backend
const difficulty = "easy"

// ToDo: Spin off QuizDataPull to separate page specifically for mul choice quizzes; set this page up as a welcome page for logged in userss

  return (
    <div className="test">
      <p>Hello User!</p>
      <QuizDataPull userDifficulty={difficulty} />
    </div>
  );
}

export default UserHome;
