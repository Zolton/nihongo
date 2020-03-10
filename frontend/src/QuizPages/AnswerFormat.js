import React, { useState, useEffect } from "react";
import QuestionButtons from "./QuestionButtons";



function PassFail (answerID) {
  return answerID

}

function AnswerFormat(props) {
  const [answerID, setAnswerID] = useState();
  const [answerTF, setAnswerTF] = useState()

function setAnswers(id, TF) {
    setAnswerID(id)
    setAnswerTF(TF)
  
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
            <div>
              <input
                type="radio"
                id={singleAnswer.answer_id}
                value={singleAnswer.answer}
                onChange={()=>setAnswers(singleAnswer.answer_id, singleAnswer.correct_answer)}
                // Checked works on an T/F basis.  If true, checked, if not, false
                checked = {answerID == singleAnswer.answer_id}
              />
              <label>{singleAnswer.answer}</label>
            </div>
          )
        })}
      </form>
      <QuestionButtons
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        quizLength={quizLength}
        answer={PassFail(answerID)}
      />
    </div>
  );
}

export default AnswerFormat;
