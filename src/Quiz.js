import React, { Component } from 'react';

let quizData = require('./quiz_data.json');


class Quiz extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }
    render(){
        return <div className="QuizQuestion">
            {
               quizData.quiz_questions.map((questions) => {                  
                      return( <div>{ questions.instruction_text }</div>  )              
               })           
            }
             </div>;
    }
}

export default Quiz;