import { Component, OnInit } from '@angular/core';
import { Welcome, Question, Option } from '../welcome';
import { QUESTIONS } from '../mock-questions'
import { setCurrentInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  welcomeMessage: string = "Click on start button to start quiz.";
  selectedOption:Option;
  questions = QUESTIONS;
  qindex: number = 0;
  currentQuestion: Question;
  startQuiz: boolean = false;
  selectedAnswerId: number = 0;
  totalScore: number = 0;
  constructor() { }

  ngOnInit() {
    this.setCurrentQuestion();
  }
  onStart(): void {
    this.startQuiz = !this.startQuiz;
    console.log("On click" + this.startQuiz);
  }

  nextQuestion(): void {
    this.qindex++;
    this.setCurrentQuestion();
  }

  setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.qindex];
  }

  submitAnswer(): void {
    this.selectedOption = this.currentQuestion.options.filter((item) => item.id === this.selectedAnswerId)[0];
    this.totalScore += this.selectedOption.isAnswer?1:0;
    this.nextQuestion();
  }

  selectedAnswer(answerId: number): void {
    this.selectedAnswerId = answerId;
  }
}
