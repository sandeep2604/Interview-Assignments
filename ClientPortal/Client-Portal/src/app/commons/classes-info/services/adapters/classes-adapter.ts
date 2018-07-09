import { Classes } from '../../models/classes';

export class ClassesAdapter {
    static parseResponse(classesData: any): Classes {
        debugger;
        let classes: Classes = new Classes({
            ClassesName: classesData,
        });
        return classes;
    }

}