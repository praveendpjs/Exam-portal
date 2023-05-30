import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import {  login, Register } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin = false
  // authError:String = ''
  constructor(private user:UserService, private router:Router){}
  ngOnInit(): void{
    this.user.reloadAdmin()
  }
  register(data:Register):void{
    console.log(data);
    this.user.userRegister(data); //we are calling API here
  }
  login(data:Register):void{
    console.warn(data);
    this.user.userLogin(data)
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

