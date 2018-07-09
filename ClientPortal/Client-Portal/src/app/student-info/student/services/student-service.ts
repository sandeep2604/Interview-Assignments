import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as _ from 'underscore';
import { Observable } from 'rxjs';
import 'rxjs/Rx'
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Student } from '../models/student';
import { StudentAdapter } from '../services/adapters/student-adapter';

@Injectable()
export class StudentService {

    private _headers: Headers = new Headers();

    constructor(
        private _http: Http
    ) {
        this._headers.append('Content-Type', 'application/json');
    }

    getAllStudents(): Observable<Student[]> {
        let promise: Promise<Student[]> = new Promise((resolve, reject) => {
            return this._http.get(environment.SERVICE_BASE_URL + '/studentinfo/GetAll',{
                headers: this._headers
            }).map(res => res.json())
                .subscribe((data: Array<Object>) => {
                    let students = (<Object[]>data).map((studentData: any) => {
                        return StudentAdapter.parseResponse(studentData);
                    });
                    resolve(students);
                }, (error) => {
                    reject(error);
                });

        });
        return <Observable<Student[]>>Observable.fromPromise(promise);
    }


    getStudentsRegsiterdCountForClass(): Observable<Student[]> {
        let promise: Promise<Student[]> = new Promise((resolve, reject) => {
            return this._http.get(environment.SERVICE_BASE_URL + '/studentinfo/GetStudentsRegsiterdCountForClass', {
                headers: this._headers
            }).map(res => res.json())
                .subscribe((data: Array<Object>) => {
                    let students = (<Object[]>data).map((studentData: any) => {
                        return StudentAdapter.parseResponse(studentData);
                    });
                    resolve(students);
                }, (error) => {
                    reject(error);
                });

        });
        return <Observable<Student[]>>Observable.fromPromise(promise);
    }


    getStudentsRegsiterdCountForMoreClass(): Observable<Student[]> {
        let promise: Promise<Student[]> = new Promise((resolve, reject) => {
            return this._http.get(environment.SERVICE_BASE_URL + '/studentinfo/GetStudentsRegsiterdCountForMoreClass', {
                headers: this._headers
            }).map(res => res.json())
                .subscribe((data: Array<Object>) => {
                    let students = (<Object[]>data).map((studentData: any) => {
                        return StudentAdapter.parseResponse(studentData);
                    });
                    resolve(students);
                }, (error) => {
                    reject(error);
                });

        });
        return <Observable<Student[]>>Observable.fromPromise(promise);
    }


    addStudent(student: Student): Observable<Student> {
        let promise: Promise<Student> = new Promise((resolve, reject) => {
            let requestData: any = student.toJS();
            return this._http.post(environment.SERVICE_BASE_URL + '/studentinfo/save', JSON.stringify(requestData), {
                headers: this._headers
            })
                .map(res => res.json())
                .subscribe((data: any) => {
                    let parsedStudent: Student = null;
                    parsedStudent = StudentAdapter.parseResponse(data);
                    resolve(parsedStudent);
                }, (error) => {
                    reject(error);
                });
        });
        return <Observable<Student>>Observable.fromPromise(promise);
    }


}