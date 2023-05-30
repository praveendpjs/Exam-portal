import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { quiz } from '../data-type';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  questionList:undefined | quiz[]; //quiz[] is from data-type
  
  constructor(private quiz:QuizService){}

  ngOnInit():void{
    this.quiz.questionList().subscribe((result:any)=>{
      // console.warn(result);
      if(result){
        this.questionList=result
      }
    })
    
  }


}
