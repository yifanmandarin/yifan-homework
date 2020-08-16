import React, { Component } from 'react';
import {Quizdata1, Quizdata2} from './Quizdata1';
import './App.css';
import { Link } from 'react-router-dom';

export class Quiz1 extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true
        }
    }
    
    loadQuiz = () => {
        const {currentIndex} = this.state;
        this.setState(() => {
            return {
                question: Quizdata1[currentIndex].question,
                options: Quizdata1[currentIndex].options,
                answer: Quizdata1[currentIndex].answer
            }
        })
    }

    nextQuestionHandler = () => {
        const {userAnswer, answer, score, disabled} = this.state;

        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null,
            disabled: true
        })
    }

    componentDidMount() {
        this.loadQuiz();
    }
    
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const {currentIndex} = this.state;
        if (this.state.currentIndex != prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: Quizdata1[currentIndex].question,
                    options: Quizdata1[currentIndex].options,
                    answer: Quizdata1[currentIndex].answer
                }
            });
        }
    }

    finishHandler = () => {
        const {userAnswer, answer, score} = this.state;

        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }
        if (this.state.currentIndex === Quizdata1.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }

    render() {
        const {question, options, currentIndex, userAnswer, quizEnd} = this.state;

        if(quizEnd) {
            return (
                <div>
                    <div>
                        <h1>Quiz Over. Final score is {this.state.score} points.</h1>
                        <p>The correct Answers for the quiz are: </p>
                        <ul>
                            {Quizdata1.map((item, index) => 
                                <li className="options" key={index}>
                                    {item.answer}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <Link to="/yifan-homework/quiz"><button>
                            Back to Quiz Page
                        </button></Link>
                    </div>
                </div>

            )
        }

        return (
            <div id={`Quiz1`}>
                <h1>Welcome to Quiz 1!</h1>
                    <h2>{question}</h2>
                    <span>{`Question ${currentIndex + 1} of ${Quizdata1.length}`}</span>
                    {
                        options.map(option =>
                            <p key={option.id} className={`options ${userAnswer === option ? "selected" : null}`} 
                            onClick= {() => this.checkAnswer(option)} > 
                                {option}
                            </p>
                        )
                    }

                <div>
                    <h1>  </h1>
                </div>

                    {currentIndex < Quizdata1.length - 1 && 
                    <button disabled = {this.state.disabled} onClick={this.nextQuestionHandler}>
                        Next Question
                    </button>}

                <div>
                    <h1>  </h1>
                </div>

                    {currentIndex === Quizdata1.length - 1 && 
                    <button onClick={this.finishHandler}>
                        Finish
                    </button>
                    }
                
            </div>
        )
    }    
}

