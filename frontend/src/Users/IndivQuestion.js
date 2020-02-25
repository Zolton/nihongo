import React from "react";



function IndivQuizQuestionFormatting (props) {
    
    let question = props.questionsObject.question
    let questionID = props.questionsObject.div
    let author = props.questionsObject.author

    return (
        
        <div>
            
            {console.log("Indiv props: ", props)}
            <h1> Hello from Indiv Quetions</h1>
            <h3>Translate this: </h3>
            {question}
            
        </div>
        
    )
}

export default IndivQuizQuestionFormatting