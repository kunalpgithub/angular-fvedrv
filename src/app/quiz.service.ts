import { Injectable } from '@angular/core';
import { QUESTIONS } from './mock-questions';
import { Question } from './welcome';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private messageService:MessageService) { }

  getQuestions(): Observable<Question[]> {
    this.messageService.add("QuizService: fetched questions");
    return of(QUESTIONS);
  }
}
