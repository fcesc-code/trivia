import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  constructor() {}

  // provide an api call to fetch trivia questions
  getTriviaQuestions() {
    return fetch(
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
    )
      .then((response) => response.json())
      .then((data) => data.results)
      .then((data) =>
        data.map(
          (question: any) =>
            (question = {
              ...question,
              answers: [
                ...question.incorrect_answers,
                question.correct_answer,
              ].sort(() => Math.random() - 0.5),
            })
        )
      );
  }

  // provide an api call to fetch trivia categories
  getTriviaCategories() {
    return fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => data.trivia_categories);
  }

  // provide an api call to fetch trivia questions by category
  getTriviaQuestionsByCategory(categoryId: number) {
    return fetch(
      `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=easy&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => data.results);
  }

  // provide an api call to fetch trivia questions by difficulty
  getTriviaQuestionsByDifficulty(difficulty: string) {
    return fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => data.results);
  }

  // provide an api call to fetch trivia questions by category and difficulty
  getTriviaQuestionsByCategoryAndDifficulty(
    categoryId: number,
    difficulty: string
  ) {
    return fetch(
      `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => data.results);
  }

  // provide an api call to fetch trivia questions by search term
  getTriviaQuestionsBySearchTerm(searchTerm: string) {
    return fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&question=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => data.results);
  }
}
