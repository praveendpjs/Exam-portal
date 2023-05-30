import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { AdminAddQuizComponent } from './admin-add-quiz/admin-add-quiz.component';
import { AdminComputerScienceComponent } from './admin-computer-science/admin-computer-science.component';
import { AdminPhysicsComponent } from './admin-physics/admin-physics.component';
import { AdminChemistryComponent } from './admin-chemistry/admin-chemistry.component';
import { AdminMathematicsComponent } from './admin-mathematics/admin-mathematics.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentComputerScienceComponent } from './student/student-computer-science/student-computer-science.component';
import { StudentPhysicsComponent } from './student/student-physics/student-physics.component';
import { StudentChemistryComponent } from './student/student-chemistry/student-chemistry.component';
import { StudentMathematicsComponent } from './student/student-mathematics/student-mathematics.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin-home',
    component:AdminHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-add-quiz',
    component:AdminAddQuizComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-computer-science',
    component:AdminComputerScienceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-physics',
    component:AdminPhysicsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-chemistry',
    component:AdminChemistryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-mathematics',
    component:AdminMathematicsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user-auth',
    component:UserAuthComponent,
  },
  {
    path:'student-home',
    component: StudentHomeComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'student-computer-science',
    component: StudentComputerScienceComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'student-physics',
    component: StudentPhysicsComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'student-chemistry',
    component: StudentChemistryComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'student-mathematics',
    component: StudentMathematicsComponent,
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
