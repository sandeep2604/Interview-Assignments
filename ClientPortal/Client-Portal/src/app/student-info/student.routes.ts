import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/components/student-list';
import { ClassStudentCountListComponent} from './student/components/class-student-count-list';
import { StudentClassCountListComponent} from './student/components/student-class-count-list';
import { StudentAddComponent} from './student/components/student-add';

export const studentRoutes: Routes = [
    {
        path: 'student-list',
        component: StudentListComponent
    },
    {
        path: 'class-student-list',
        component: ClassStudentCountListComponent
    },
    {
        path: 'student-class-list',
        component: StudentClassCountListComponent
    },
    {
        path: 'student-add',
        component: StudentAddComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }