import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../data-type';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showLogin = false
  // authError:String = ''
  constructor(private student:StudentService, private router:Router){}
  ngOnInit(): void{
    this.student.reloadStudent()
  }
  register(data:Register):void{
    console.log(data);
    this.student.userRegister(data); //we are calling API here
  }
  login(data:Register):void{
    console.warn(data);
    this.student.userLogin(data)
    // this.admin.isLoginError.subscribe((isError)=>{
    //   if(isError){
    //     this.authError="Email or password is not correct";
    //   }
    // })
  }
  openLogin(){
    this.showLogin=true
  }
  openRegister(){
    this.showLogin=false
  }
}


