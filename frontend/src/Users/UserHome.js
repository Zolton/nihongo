import React, { useState, useEffect } from "react";
import QuizDataMap from "./quizDataMap";


import IndivQuizQuestion from "./IndivQuestion";

function UserHome() {



  return (
    <div className="test">
      <p>Hello User!</p>
      <QuizDataMap />
      <IndivQuizQuestion />

    </div>
  );
}

export default UserHome;
