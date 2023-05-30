import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Register, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdminLoggedIn = new BehaviorSubject<boolean>(false);
  // This is used to display error on screen
  // isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }
  userRegister(data:Register){
    this.http.post('http://localhost:3000/admin',data,{observe:'response'}).subscribe((result)=>{
      console.log(result);
      if(result){
        this.isAdminLoggedIn.next(true)
        localStorage.setItem('admin',JSON.stringify(result.body))
        this.router.navigate(['admin-home'])
      }
    })
  }
  reloadAdmin(){
    if(localStorage.getItem('admin')){
      this.isAdminLoggedIn.next(true)
      this.router.navigate(['admin-home'])
    }
  }
  userLogin(data:login){
    this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      // result:any allows any data type so that we can access result.body.length
      console.warn(result);
      if(result && result.body && result.body.length === 1){
        // this.isLoginError.emit(false)
        localStorage.setItem('admin',JSON.stringify(result.body))
        this.router.navigate(['admin-home'])
      }else{
        // this.isLoginError.emit(true)
        alert("Login failed")
      }
    })
  }
}
