import React, { useState, useEffect } from "react";
import QuestionButtons from "./QuestionButtons"

function AnswerFormat(props) {

    const [isChecked, setIsChecked] = useState(false)

    let answerObject = props.answerObject
    let setCurrentIndex = props.setCurrentIndex
    let currentIndex = props.currentIndex
    let quizLength = props.quizLength
    return (
      <div>
        {answerObject.map(singleAnswer => {
          console.log("single answer: ", singleAnswer)
          return (
            <div>
              
              <input type="radio" answer_id={singleAnswer.answer_id} value={singleAnswer.answer} checked = {isChecked} onChange={setIsChecked} />
              <label htmlFor={singleAnswer.answer_id}>{singleAnswer.answer}</label>
            </div>


            //    <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            // <label htmlFor={props.id}>{props.label}</label>
              

              


            // <form>
            //   <div className="radio">
            //     <label>
            //       <input type="radio" value="options1" checked={false} />
            //       {singleAnswer.answer}
            //     </label>
            //   </div>
            // </form>
          )
        })}
        <QuestionButtons setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} quizLength = {quizLength}  />
      </div>
    );
  }

  export default AnswerFormat