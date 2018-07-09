import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { Student } from '../models/student';
import { StudentService } from '../services/student-service';
import { List } from 'immutable';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class StudentsStore {

    private _students: BehaviorSubject<List<Student>> = new BehaviorSubject(List([]));
    private _selectedstudents: BehaviorSubject<List<Student>> = new BehaviorSubject(List([]));

    constructor(
        private _studentService: StudentService
    ) {
       
    }

    resetStore() {
        this._students.next(this._students.getValue().clear());
        this._selectedstudents.next(this._selectedstudents.getValue().clear());
    }


    get students() {
        return this._students.asObservable();
    }

    get selectedStudents() {
        return this._selectedstudents.asObservable();
    }

    getAllStudents(): Observable<Student[]> {
        let promise = new Promise((resolve, reject) => {
            this._studentService.getAllStudents().subscribe((students: Student[]) => {
                this._students.next(List(students));
                resolve(students);
            }, error => {
                reject(error);
            });
        });
        return <Observable<Student[]>>Observable.fromPromise(promise);
    }

    getStudentsRegsiterdCountForClass(): Observable<Student[]> {
        let promise = new Promise((resolve, reject) => {
            this._studentService.getStudentsRegsiterdCountForClass().subscribe((students: Student[]) => {
                this._students.next(List(students));
                resolve(students);
            }, error => {
                reject(error);
            });
        });
        return <Observable<Student[]>>Observable.fromPromise(promise);
    }


    getStudentsRegsiterdCountForMoreClass(): Observable<Student[]> {
        let promise = new Promise((resolve, reject) => {
            this._studentService.getStudentsRegsiterdCountForMoreClass().subscribe((students: Student[]) => {
                this._students.next(List(students));
                resolve(students);
            }, error => {
                reject(error);
            });
        });
        return <Observable<Student[]>>Observable.fromPromise(promise);
    }

    addStudent(student: Student): Observable<Student> {
        let promise = new Promise((resolve, reject) => {
            this._studentService.addStudent(student).subscribe((student: Student) => {
                this._students.next(this._students.getValue().push(student));
                resolve(student);
            }, error => {
                reject(error);
            });
        });
        return <Observable<Student>>Observable.from(promise);
    }



}