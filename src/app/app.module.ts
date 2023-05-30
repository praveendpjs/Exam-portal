import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddQuizComponent } from './admin-add-quiz/admin-add-quiz.component';
import { RemoveDuplicateCategoriesPipe } from './pipes/remove-duplicate-categories.pipe';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    AdminAddQuizComponent,
    RemoveDuplicateCategoriesPipe,
    AdminComputerScienceComponent,
    AdminPhysicsComponent,
    AdminChemistryComponent,
    AdminMathematicsComponent,
    UserAuthComponent,
    StudentHomeComponent,
    StudentComputerScienceComponent,
    StudentPhysicsComponent,
    StudentChemistryComponent,
    StudentMathematicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
