import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  welcomeMessage: string = "Click on start button to start quiz.";
  startQuiz: boolean = false;
  constructor() { }

  ngOnInit() {
    
  }
  onStart(): void {
    this.startQuiz = !this.startQuiz;
    
  }
}
