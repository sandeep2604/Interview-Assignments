import { Record } from 'immutable';

const ClassesRecord = Record({    
    ClassesName:''
});

export class Classes extends ClassesRecord{
    ClassesName: string;
    constructor(props){
        super(props);
    }
}