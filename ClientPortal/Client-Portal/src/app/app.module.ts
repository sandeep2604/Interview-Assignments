import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { StudentModule } from './student-info/student.module';
import { CommonsModule } from './commons/commons.module'
import { NoContentComponent } from './no-content-component';
import { AppHeaderComponent } from './commons/app-header/app-header';





@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StudentModule,
    CommonsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
