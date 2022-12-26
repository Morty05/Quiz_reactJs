// import React from "react";
import "./Quiz.css";
import Questions from './QuizData';
import QuizResult from './QuizResult';
import React, { useEffect, useState } from "react";


const Quizz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    // const [correctAns,setCorrectAns]= useState(0);
     const [showResult,setshowResult]= useState(false);
    //  const Answeroption=(isCorrect)=>{
    // if(isCorrect){
    //     setScore(score+1);
    //     setCorrectAns(correctAns+1);
    // }
    //  }
    // const handleNextQuestion=()=>{
    //     const nextQuestion =currentQuestion+1;
        
    //     if(nextQuestion<Questions.length()){setCurrentQuestion(nextQuestion);}
    //     else{
    //         setshowResult(true);
    //     }
        
    // };
    return(
        
            <div className="app">
                {showResult?(<QuizResult/>): ( <>
                <div className="question-section">

                    <h4>
                        Score: {score}
                    </h4>
                    <div className="question-count">
                        <span>Question {currentQuestion
                        +1} of 4</span>
                    </div>
                    <div className="question-text">
                        {Questions[currentQuestion].questionText}</div>
                </div>
                <div className="answer-section">
                    {Questions[currentQuestion].answerOptions.map((ans, i) => {
                        return <button key={i} onClick={Answeroption(ans.isCorrect)} >{ans.answertext}</button>
                    })}

                    <div className="actions"><buttons>Quit</buttons>
                        <button onClick={handleNextQuestion}>Next</button></div>
                </div>
                </>)}
             
               

            </div>




        
    )
}

export default Quizz;