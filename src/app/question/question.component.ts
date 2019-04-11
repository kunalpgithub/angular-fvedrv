import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question, Option } from '../welcome';
import { setCurrentInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  selectedOption: Option;
  qindex: number = 0;
  currentQuestion: Question = null;
  totalScore: number = 0;
  showError: boolean = false;
  constructor(private quizService: QuizService) { }
  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.quizService.getQuestions().subscribe(ques => { this.questions = ques; this.nextQuestion() });
  }

  nextQuestion(): void {
    this.currentQuestion = this.questions[this.qindex];
    this.qindex++;
  }

  submitAnswer(): void {
    if (!this.selectedOption) { this.showError = true; } else {
      this.totalScore += this.selectedOption.isAnswer ? 1 : 0;
      this.nextQuestion();
      this.selectedOption = null;
      this.showError = false;
    }

  }

  selectedAnswer(selected: Option): void {
    this.selectedOption = selected;
  }
}