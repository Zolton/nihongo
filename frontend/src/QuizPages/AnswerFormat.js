import React, { useState, useEffect } from "react";
import QuestionButtons from "./QuestionButtons";

function AnswerFormat(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isNotChecked, setIsNotChecked] = useState(false);
  const [answer, setAnswer] = useState();

  // Rename props for easier time
  let answerObject = props.answerObject;
  let setCurrentIndex = props.setCurrentIndex;
  let currentIndex = props.currentIndex;
  let quizLength = props.quizLength;

  function test () {
    return true
  }

  return (
    <div>
      {answerObject.map(singleAnswer => {
        console.log("single answer: ", singleAnswer);
        return (
          <form key={singleAnswer.answer_id}>
            <input
              type="radio"
              id={singleAnswer.answer_id}
              value={singleAnswer.answer}
            />
            <label>{singleAnswer.answer}</label>

          </form>

            // screw this - just use formik
        );
      })}
      <QuestionButtons
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        quizLength={quizLength}
      />
    </div>
  );
}

export default AnswerFormat;
