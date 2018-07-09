import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { Classes } from '../models/classes';
import { ClassesService } from '../services/classes-service';
import { List } from 'immutable';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ClassesStore {

    private _classes: BehaviorSubject<List<Classes>> = new BehaviorSubject(List([]));
    private _selectedClasses: BehaviorSubject<List<Classes>> = new BehaviorSubject(List([]));

    constructor(
        private _classesService: ClassesService
    ) {
       
    }

    resetStore() {
        this._classes.next(this._classes.getValue().clear());
        this._selectedClasses.next(this._selectedClasses.getValue().clear());
    }


    get classes() {
        return this._classes.asObservable();
    }

    get selectedStudents() {
        return this._selectedClasses.asObservable();
    }
   

    getAllClasses(): Observable<Classes[]> {
        let promise = new Promise((resolve, reject) => {
            this._classesService.getAllClasses().subscribe((classes: Classes[]) => {
                this._classes.next(List(classes));
                resolve(classes);
            }, error => {
                reject(error);
            });
        });
        return <Observable<Classes[]>>Observable.fromPromise(promise);
    }

}