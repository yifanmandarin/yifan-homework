import React, { Component } from 'react';
import {Quizdata1, Quizdata2} from './Quizdata1';
import './App.css';
import { Link } from 'react-router-dom';

export class Quiz1 extends Component {
    
    constructor(props) {
        super(props)
        
        this.message = null
        this.number = 1
        this.quizSet = Quizdata1
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true,
            optdisabled: false
        }
    }
    
    loadQuiz = () => {
        const {currentIndex} = this.state;
        this.setState(() => {
            return {
                question: this.quizSet[currentIndex].question,
                options: this.quizSet[currentIndex].options,
                answer: this.quizSet[currentIndex].answer
            }
        })
    }

    nextQuestionHandler = () => {
        const {userAnswer, answer, score, disabled, optdisabled} = this.state;

        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null,
            disabled: true,
            optdisabled: false
        })
    }

    componentDidMount() {
        this.loadQuiz();
    }
    
    validateAnswer = ans => {
        this.setState({
            userAnswer: ans,
        })
    }

    checkAnswer = () => {
        const {userAnswer, answer, score, disabled} = this.state;

        this.setState({
            disabled: false,
            optdisabled: true
        })
        if(userAnswer === answer){
            this.message = "Correct! 正确! ✔";
        } else {
            this.message = "Wrong! 错误! ✖";
        }

    }

    componentDidUpdate(prevProps, prevState) {
        const {currentIndex} = this.state;
        if (this.state.currentIndex != prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: this.quizSet[currentIndex].question,
                    options: this.quizSet[currentIndex].options,
                    answer: this.quizSet[currentIndex].answer
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
        if (this.state.currentIndex === this.quizSet.length - 1) {
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
                            {this.quizSet.map((item, index) => 
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

        {/*const buttonstyle = {
            padding: "8px",
            margin: "auto 8vw",
            border: "3px solid #000",
            cursor: "pointer",
            width: "80%",
            /*background-color: white;
            color: "steelblue",
            fontWeight: "bold",
            borderRadius: "7px"
        }*/}

        return (
            <div id={`Quiz1`}>
                <h1>Welcome to Quiz {this.number}!</h1>
                    <h2>{question}</h2>
                    <span>{`Question ${currentIndex + 1} of ${this.quizSet.length}`}</span>
                    {
                        options.map(option =>
                            <button key={option.id} disabled={this.state.optdisabled} className={`options ${userAnswer === option ? "selected" : null}`} 
                            onClick= {() => this.validateAnswer(option)} > 
                                {option}
                            </button>
                        )
                    }
                
                <div>
                    <h1>  </h1>
                </div>

                <div className="green">
                    {currentIndex < this.quizSet.length - 1 && 
                    <button onClick={this.checkAnswer}>
                        Check Answer
                    </button>
                    }
                    {this.state.disabled === false && 
                    <div>
                        <p style={{fontSize: "4vh"}}>{this.message}</p>
                        <p style={{fontSize: "4vh", color: "green"}}>正确答案是: {this.state.answer}</p>
                    </div>
                    }
                </div>

                <div>
                    <h1></h1>
                </div>
                
                <div className="green">
                    {currentIndex < this.quizSet.length - 1 && 
                    <button disabled = {this.state.disabled} onClick={this.nextQuestionHandler}>
                        Next Question
                    </button>}

                    {currentIndex === this.quizSet.length - 1 && 
                    <button onClick={this.finishHandler}>
                        Finish
                    </button>
                    }
                </div>
                
            </div>
        )
    }    
}




export class Quiz2 extends Quiz1{

    constructor(props) {
        super(props)
        
        this.number = 2
        this.quizSet = Quizdata2
        
    }

    
}