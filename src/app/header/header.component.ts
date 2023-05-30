import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string = 'default';
  adminName:string = "";
  constructor(private route:Router){}
  ngOnInit(): void{
    this.route.events.subscribe((val:any)=>{
      // console.log(val.url); // we can see some undefined if we do not use this if condition.
      if(val.url){ // Filters the undefined part
        // console.log(val.url);
        if(localStorage.getItem('admin') && val.url.includes('admin')){ // we use includes('admin') coz anything related to admin has 'admin' string in it ex:admin-home so we are fetching it
          // console.log("This is admin area");
          let adminStore = localStorage.getItem('admin');
          let adminData =adminStore && JSON.parse(adminStore)[0] //if adminStore && is not added it is giving error so we check if it is not null on that line. And we need to use [0] coz it is in form of array if not adminName is not shown
          this.adminName = adminData.name;
          this.menuType="admin"
        }else{
          console.log("Not admin");
          this.menuType="default"
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('admin');
    this.route.navigate(['/'])
  }
}
