import { Component, inject } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './question.component.html',
  styleUrl: './question.component.sass',
})
export class QuestionComponent {
  triviaService: TriviaService = inject(TriviaService);
  questions: any[] = [];
  selected: any = {};

  constructor() {
    this.triviaService.getTriviaQuestions().then((data) => {
      this.questions = data;
      this.nextQuestion();
    });
  }

  ngOnInit(): void {}

  nextQuestion() {
    this.selected = this.questions.pop();
  }
}
