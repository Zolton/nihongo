import React, { useState, useEffect } from "react";
import QuestionButtons from "./QuestionButtons";

function AnswerFormat(props) {
  
  const [answerID, setAnswerID] = useState();
  const [answerTF, setAnswerTF] = useState(null);

  // Sets answerID and whether answer is correct in one function so onChange doesn't break
  function setAnswers(id, TF) {
    setAnswerID(id);
    setAnswerTF(TF);
  }

  // Rename props for easier use
  let answerObject = props.answerObject;
  let setCurrentIndex = props.setCurrentIndex;
  let currentIndex = props.currentIndex;
  let quizLength = props.quizLength;

  return (
    <div>
      <form>
        {/* Dynamically generate radio buttons, regardless of # of answers */}
        {answerObject.map(singleAnswer => {
          return (
            <div key = {singleAnswer.answer_id}>
              <input
                type="radio"
                id={singleAnswer.answer_id}
                value={singleAnswer.answer}
                onChange={() =>
                  setAnswers(
                    singleAnswer.answer_id,
                    singleAnswer.correct_answer
                  )
                }
                // Note: Checked works on an T/F basis.  If true, checked, if not, false
                checked={answerID === singleAnswer.answer_id}
              />
              <label>{singleAnswer.answer}</label>
            </div>
          );
        })}
      </form>
      <QuestionButtons
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        quizLength={quizLength}
        answerID={answerID}
        answerTF={answerTF}
      />
    </div>
  );
}

export default AnswerFormat;
