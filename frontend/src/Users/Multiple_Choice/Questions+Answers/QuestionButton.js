import React, { useState, useEffect } from "react";

function QuestionButton(props) {
    let setCurrentIndex = props.setCurrentIndex
    let currentIndex = props.currentIndex
    let quizLength = props.quizLength
    console.log(quizLength)

    return (
        <div>
            <button onClick={ () => currentIndex > 0 ? (setCurrentIndex(currentIndex-1)) : (null) }>Previous Question</button>
            <button >Submit Answer</button>
            <button onClick={ () => currentIndex < quizLength ? (setCurrentIndex(currentIndex+1)) : (null) }>Next Question</button>
        </div>
    )

}

export default QuestionButton