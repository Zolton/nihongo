import React, { useEffect } from "react";

function QuizFormat(props) {
  const quizData = props.quizData;
  console.log(quizData);
  let currentIndex = 0;

  // Check if props loaded yet
  if (quizData) {
    let quizQuestion = quizData[currentIndex].question;
    let answerObject = quizData[currentIndex].answers;
    return (
      <div>
        Hello from formatting
        {console.log("index is ", quizData[currentIndex].answers)}
        <h2>{quizQuestion}</h2>
        {answerObject.map(singleAnswer => {
          return (
            <form>
              <div className="radio">
                <label>
                  <input type="radio" value="options1" checked={false} />
                  {singleAnswer.answer}
                </label>
              </div>
            </form>
          );
        })}
      </div>
    );
    // If props not loaded, keep waiting
  } else {
    return (
      <div>
        {/* Insert loading animation component here */}
        Loading, please wait
      </div>
    );
  }
}

export default QuizFormat;
