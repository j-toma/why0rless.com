import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        true: 0,
        false1: 0,
        false2: 0,
        false3: 0,
      },
      falselyAnswered: [],
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      text: quizQuestions[0].text,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults2(this.getResults2()), 300);
    }
  }

  setUserAnswer(answer) {
    if (answer !== "true") {
      const updatedFalselyAnswered = update(this.state.falselyAnswered, {
        $push: [this.state.questionId]
      });

      this.setState({
        falselyAnswered: updatedFalselyAnswered
      });
    }
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });

  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        text: quizQuestions[counter].text,
        answer: ''
    });
  }


  getResults2() {
    const answersCount = this.state.answersCount;
    const trueCount = answersCount['true'];
    const questionCount = quizQuestions.length;
    const res = trueCount ? 100*trueCount/questionCount : 0.0;
    return res
  }

  setResults2(result) {
    const counter = this.state.counter + 1
    this.setState({
      counter: counter,
      result: result
    });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result
        falselyAnswered={this.state.falselyAnswered}
        result={this.state.result}
      />
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.counter === quizQuestions.length? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;
