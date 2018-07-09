import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student.routes';
import { StudentListComponent } from '../student-info/student/components/student-list';
import { ClassStudentCountListComponent } from '../student-info/student/components/class-student-count-list';
import { StudentClassCountListComponent } from '../student-info/student/components/student-class-count-list';
import { StudentAddComponent } from '../student-info/student/components/student-add';

import { StudentService } from '../student-info/student/services/student-service';
import { StudentsStore } from '../student-info/student/stores/student-store';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StudentRoutingModule
       
    ],
    declarations: [
        StudentListComponent,
        ClassStudentCountListComponent,
        StudentClassCountListComponent,
        StudentAddComponent
    ],
    providers: [
        StudentService,
        StudentsStore
    ]
})
export class StudentModule {
}
