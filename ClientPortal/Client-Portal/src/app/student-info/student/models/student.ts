import { Record } from 'immutable';

const StudentRecord = Record({    
    StudentID:0,
    Class:'',
    Professor:'',
    RegisteredCount:0
});

export class Student extends StudentRecord{

    StudentID: number;
    Class: string;
    Professor: string;
    RegisteredCount: number;

    constructor(props){
        super(props);
    }
}