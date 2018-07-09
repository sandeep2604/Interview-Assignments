import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { environment } from '../../../../environments/environment';
import { Student } from '../models/student';
import { StudentsStore } from '../stores/student-store';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.html'
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(

    private _router: Router,
    private _studentsStore: StudentsStore
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this._studentsStore.getAllStudents()
        .subscribe(students => {
            this.students = students;
        },
            (error) => {
               
            },
            () => {
                
            });
          }
}
