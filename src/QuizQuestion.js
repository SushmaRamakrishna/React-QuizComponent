import React, { Component } from 'react'
import QuizQuestionButton from "./QuizQuestionButton.js"

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {incorrectAnswer:false}
    }
    handeClick(buttonText){
        if(incorrectAnswer){
            this.state = {incorrectAnswer:true}
        }else
        {
            this.state = {incorrectAnswer:false}
        }
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
        }
    }
    render(){
        return (
        <main>
            <section>
            <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
            <ul>               
            {this.props.quiz_question.answer_options.map((answer_option, index) => {
                    return <QuizQuestionButton key={index} button_text={answer_option}
                    clickHandler={ this.handeClick.bind(this)} /> 
                   
                })}
            
            </ul>
            {
                this.state.incorrectAnswer?<p>Sorry, that's not right</p>: null
            }
            </section>
        </main>
        )
    }
}

export default QuizQuestion
