import { Component, ElementRef, ViewChild } from '@angular/core';
import { quiz } from '../data-type';
import { QuizService } from '../services/quiz.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin-chemistry',
  templateUrl: './admin-chemistry.component.html',
  styleUrls: ['./admin-chemistry.component.css']
})
export class AdminChemistryComponent {
  questionList:undefined | quiz[]; //quiz[] is from data-type
  category:undefined|quiz[]
  quizMessage:undefined|string;
  isSubmitted = false;
  selectedValue = "option1"
  ischecked = false;
  @ViewChild("iscorrect") iscorrect!: ElementRef;
  getValue(){
    if(this.selectedValue === "Spherical"){
      console.log(this.iscorrect);
      this.iscorrect.nativeElement.innerHTML = "This is the correct answer"
    }


  }
  constructor(private quiz:QuizService){}
  ngOnInit():void{
    this.quiz.questionList().subscribe((result:any)=>{
      if(result){
        this.questionList=result

      }
    })

    this.quiz.getCategoryChemistry().subscribe((result:any)=>{
        if(result){
          this.category=result
        }
    })
  }
  deleteQuestion(id:number){
    this.quiz.deleteQuestion(id).subscribe((result)=>{
      if(result){
        this.quizMessage="Question is deleted"
      }
    });
    setTimeout(()=>{
      this.quizMessage=undefined
    },3000);
  }
  // isCorrected(data:quiz):void{
  //   console.log(data);
  //   this.quiz.isCorrect(data)
  // }

  submitForm(form:NgForm){
    this.isSubmitted = true;
    if(!form.valid){
      return false;
    } else {
      alert(JSON.stringify(form.value))
      console.log(form.value);
      return true
    }
  }

}
