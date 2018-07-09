import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { environment } from '../../../../environments/environment';
import { Student } from '../models/student';
import { StudentsStore } from '../stores/student-store';

@Component({
  selector: 'class-student-list',
  templateUrl: './class-student-count-list.html'
})
export class ClassStudentCountListComponent implements OnInit {

  students: Student[];

  constructor(

    private _router: Router,
    private _studentsStore: StudentsStore
  ) { }

  ngOnInit() {
    this.getStudentsRegsiterdCountForClass();
  }

  getStudentsRegsiterdCountForClass() {
    this._studentsStore.getStudentsRegsiterdCountForClass()
        .subscribe(students => {
            this.students = students;
        },
            (error) => {
               
            },
            () => {
                
            });
          }
}
