import React, { useState } from 'react';
import "./App.css"
import Questions from './Quizdata';
export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    // const [dialogue, setDialogue]= useState(false);

//     const ShowDialogue=()=>{
//    if(score > 7 ){
//     setDialogue(true);
//     }
//     };

	const handleAnswerClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    const handleNextQuestion=()=>{
        const nextQuestion =currentQuestion+1;
        
        if(nextQuestion < Questions.length){setCurrentQuestion(nextQuestion);}
        else{
            setShowScore(true);
        }
        
    };
 
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You got {score} correct out of {Questions.length} questions
                   <button onClick={()=>{
                    setShowScore(false);
                    setCurrentQuestion(0);
                   }}>Try Again</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{Questions.length}
						</div>
						<div className='question-text'>{Questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{Questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                        
					</div>
                    <div className='next'><button onClick={()=> handleNextQuestion()}
                    >Next</button></div>
				</>
			)}
		</div>
	);
}