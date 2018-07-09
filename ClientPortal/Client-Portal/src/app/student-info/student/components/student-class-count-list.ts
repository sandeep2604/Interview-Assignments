import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { environment } from '../../../../environments/environment';
import { Student } from '../models/student';
import { StudentsStore } from '../stores/student-store';

@Component({
  selector: 'student-class-list',
  templateUrl: './student-class-count-list.html'
})
export class StudentClassCountListComponent implements OnInit {

  students: Student[];

  constructor(

    private _router: Router,
    private _studentsStore: StudentsStore
  ) { }

  ngOnInit() {
    this.getStudentsRegsiterdCountForMoreClass();
  }

  getStudentsRegsiterdCountForMoreClass() {
    this._studentsStore.getStudentsRegsiterdCountForMoreClass()
        .subscribe(students => {
            this.students = students;
        },
            (error) => {
               
            },
            () => {
                
            });
          }
}
