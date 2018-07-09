import { Student } from '../../models/student';

export class StudentAdapter {
    static parseResponse(studentData: any): Student {
        let student: Student = new Student({
            StudentID: studentData.StudentID,
            Class: studentData.Class,
            Professor: studentData.Professor,
            RegisteredCount: studentData.RegisteredCount
        });
        return student;
    }

}