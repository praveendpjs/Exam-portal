import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { quiz } from 'src/app/data-type';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-student-mathematics',
  templateUrl: './student-mathematics.component.html',
  styleUrls: ['./student-mathematics.component.css']
})
export class StudentMathematicsComponent {
  questionList:undefined | quiz[]; //quiz[] is from data-type
  category:undefined|quiz[]
  quizMessage:undefined|string;
  isSubmitted = false;
  selectedValue = "option1"
  ischecked = false;



  // name = "Angular" + VERSION.major
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

    this.quiz.getCategoryMathematics().subscribe((result:any)=>{
        if(result){
          this.category=result
        }
    })
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
