import React from "react";

function QuizFormat (props) {
    {console.log("Props2 are: ", props)}
    const quizData = props.quizData
    console.log("quizData is ", quizData)
      

    return (
        <div>
           {/* {quizData ? (quizData.map(x=> x.difficulty == "expert" ? (console.log("found it: ", x)) : console.log("none found") )) : (<h1>Loading, pleassse wait</h1>)} */}
        
            Hello from formatting</div>

    )
}

export default QuizFormat