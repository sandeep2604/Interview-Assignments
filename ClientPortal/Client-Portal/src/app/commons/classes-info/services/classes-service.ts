import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as _ from 'underscore';
import { Observable } from 'rxjs';
import 'rxjs/Rx'
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Classes } from '../models/classes';
import { ClassesAdapter } from '../services/adapters/classes-adapter';

@Injectable()
export class ClassesService {

    private _headers: Headers = new Headers();

    constructor(
        private _http: Http
    ) {
        this._headers.append('Content-Type', 'application/json');
    }

    getAllClasses(): Observable<Classes[]> {
        debugger;
        let promise: Promise<Classes[]> = new Promise((resolve, reject) => {
            return this._http.get(environment.SERVICE_BASE_URL + '/classinfo/GetAll',{
                headers: this._headers
            }).map(res => res.json())
                .subscribe((data: Array<Object>) => {
                    let classes = (<Object[]>data).map((ClassesData: any) => {
                        return ClassesAdapter.parseResponse(ClassesData);
                    });
                    resolve(classes);
                }, (error) => {
                    reject(error);
                });

        });
        return <Observable<Classes[]>>Observable.fromPromise(promise);
    }

}