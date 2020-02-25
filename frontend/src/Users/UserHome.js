import React, { useState, useEffect } from "react";

import axiosWithAuth from "../Security/axiosWithAuth";

function UserHome() {
  const [quizData, setQuizData] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get(`https://nihongo2go.herokuapp.com/quiz/allquestions`)
      .then(res => {
        console.log("this is res data", res.data);
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
      {console.log("this is quiz data hook content", quizData)}
      {quizData ? (<div><p>Quiz data is here: {quizData}</p></div>) : (<h1> Loading, Please wait...</h1>)}
    </div>
  );
}


export default UserHome;
