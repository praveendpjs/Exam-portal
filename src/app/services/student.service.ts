import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Register, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  isStudentLoggedIn = new BehaviorSubject<boolean>(false);
  // This is used to display error on screen
  // isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }
  userRegister(data:Register){
    this.http.post('http://localhost:3000/login',data,{observe:'response'}).subscribe((result)=>{
      console.log(result);
      if(result){
        this.isStudentLoggedIn.next(true)
        localStorage.setItem('student',JSON.stringify(result.body))
        this.router.navigate(['student-home'])
      }
    })
  }
  reloadStudent(){
    if(localStorage.getItem('student')){
      this.isStudentLoggedIn.next(true)
      this.router.navigate(['student-home'])
    }
  }
  userLogin(data:login){
    this.http.get(`http://localhost:3000/login?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      // result:any allows any data type so that we can access result.body.length
      console.warn(result);
      if(result && result.body && result.body.length === 1){
        // this.isLoginError.emit(false)
        localStorage.setItem('login',JSON.stringify(result.body))
        this.router.navigate(['login-home'])
      }else{
        // this.isLoginError.emit(true)
        alert("Login failed")
      }
    })
  }
}


