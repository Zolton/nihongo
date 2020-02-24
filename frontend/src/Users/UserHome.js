import React, { useState, useEffect } from "react";

import axiosWithAuth from "../Security/axiosWithAuth";

function UserHome() {
  const [quizData, setQuizData] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get(`https://nihongo2go.netlify.com/quiz/allquestions`)
      .then(res => {
        console.log(res.data);
        setQuizData(res.data);
      })
      .catch(rej => {
        // console.log("GET rejected");
        // console.log(rej);
      });
  }, []);

  return (
    <div className="test">
      <p>Hello User!</p>
      {/* If quiz data is present, show it, otherwise Loading */}
      {quizData ? (<div><p>Quiz data is here: {quizData}</p></div>) : (<h1> Loading, Please wait...</h1>)}
    </div>
  );
}


export default UserHome;
