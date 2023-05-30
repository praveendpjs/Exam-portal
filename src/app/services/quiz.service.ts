import { Injectable } from '@angular/core';
import { quiz } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient, private router:Router) { }
  addQuiz(data:quiz){
    return this.http.post('http://localhost:3000/quiz',data);
  }
  questionList(){
    return this.http.get<quiz[]>('http://localhost:3000/quiz') // we use <quiz[]> if not we get error in admin home this.questionList=result where questionList is questionList:undefined | quiz[];
  }

    // getCategory(data:quiz){
    //   return this.http.get(`http://localhost:3000/quiz?category=${data.category}`)
    // }
    getCategoryCS(){
      return this.http.get(`http://localhost:3000/quiz?category=Computer Science`)
    }
    getCategoryPhysics(){
      return this.http.get(`http://localhost:3000/quiz?category=Physics`)
    }
    getCategoryChemistry(){
      return this.http.get(`http://localhost:3000/quiz?category=Chemistry`)
    }
    getCategoryMathematics(){
      return this.http.get(`http://localhost:3000/quiz?category=Mathematics`)
    }
    deleteQuestion(id:number){
      return this.http.delete(`http://localhost:3000/quiz/${id}`)
    }
    // isCorrect(data:quiz){
    //   return this.http.get(`http://localhost:3000/quiz?optionc=${data.optionc}`,{observe:'response'}).subscribe((result:any)=>{
    //     if(result){
    //       alert("Correct Answer")
    //     }else{
    //       alert("Wrong Answer")
          
    //     }
    //   })
    // }
}
