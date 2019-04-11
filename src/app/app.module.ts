import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StartComponent } from './start/start.component';
import { MessagesComponent } from './messages/messages.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StartComponent, MessagesComponent, QuestionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
