import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { Register } from '../data-type';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showLogin = false
  // authError:String = ''
  constructor(private admin:AdminService, private router:Router){}
  ngOnInit(): void{
    this.admin.reloadAdmin()
  }
  register(data:Register):void{ 
    console.log(data);
    this.admin.userRegister(data); //we are calling API here
  }
  login(data:Register):void{ 
    console.warn(data);
    this.admin.userLogin(data)
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
