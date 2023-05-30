import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { quiz } from '../data-type';

@Component({
  selector: 'app-admin-add-quiz',
  templateUrl: './admin-add-quiz.component.html',
  styleUrls: ['./admin-add-quiz.component.css']
})
export class AdminAddQuizComponent {
  constructor(private quiz:QuizService){}
  submit(data:quiz){
    this.quiz.addQuiz(data).subscribe((result)=>{
      console.log(result);
      if(result){
        alert("Question is added successfully!")
      }
      
    })
  }
}
