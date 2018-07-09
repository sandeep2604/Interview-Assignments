import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { environment } from '../../../../environments/environment';
import { Student } from '../models/student';
import { StudentsStore } from '../stores/student-store';
import { AppValidators } from '../../../commons/utils/AppValidators';
import { Classes } from '../../../commons/classes-info/models/classes';
import { ClassesStore } from '../../../commons/classes-info/stores/classes-store';

@Component({
  selector: 'student-add',
  templateUrl: './student-add.html'
})
export class StudentAddComponent implements OnInit {

  students: Student;
  studentform: FormGroup;
  studentformControls;
  classes : Classes[];

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _studentsStore: StudentsStore,
    private _classesStore: ClassesStore
  ) { 

    this.studentform = this.fb.group({
      studentid: ['', [Validators.required,AppValidators.numberValidator]],
      classname: ['', Validators.required],
      professor: ['', Validators.required]
    });

    this.studentformControls = this.studentform.controls;
  }

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this._classesStore.getAllClasses()
        .subscribe(classes => {
            this.classes = classes;
        },
            (error) => {
               
            },
            () => {
                
            });
 }


  save() {
    let studentformValues = this.studentform.value;
    let result;
    let student = new Student({
      StudentID: studentformValues.studentid,
      Class: studentformValues.classname,
      Professor: studentformValues.professor
    });
    
    result = this._studentsStore.addStudent(student);
    result.subscribe(
        (response) => {
            this._router.navigate(['/student-list']);
        },
        (error) => {
           
        },
        () => {
            
        });

  }

  
}
